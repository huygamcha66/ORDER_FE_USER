/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { Col, Flex, notification, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useDecodedToken from "../../../../components/UserInfor";
import { openNotificationWithIcon } from "../../../../components/Nofitication";
import { FaEye } from "react-icons/fa";

import { resetState } from "../../../../redux/cartSlice/cartSlice";
import { listOrderMe } from "../../../../redux/orderSlice/orderSlice";

const ProductItem = ({ order }) => {
  const [quantity, setQuantity] = useState(1);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { isDelete } = useSelector((state) => state.carts);
  const { decodedToken } = useDecodedToken("token");
  console.log("««««« order »»»»»", order);
  // useEffect(() => {
  //   setQuantity(1);
  // }, [cart]);

  // nếu xoá thành công
  useEffect(() => {
    let hasRun = false;

    if (isDelete && !hasRun) {
      hasRun = true;
      openNotificationWithIcon("success", "Xoá sản phẩm thành công");
      dispatch(resetState());
    }
  }, [isDelete, dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {contextHolder}
      <tbody>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <Flex justify="center">{order._id}</Flex>
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <Flex justify="center"> {order.status === 1 && "Đã mua hàng"}</Flex>
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <Flex vertical>
              <Space style={{ padding: "4px 0px" }}>
                <Space style={{ width: "80px" }}>Tiền hàng:</Space>
                {parseInt(order.purchaseFee.toFixed(0)).toLocaleString()}(vnđ)
              </Space>
              <Space style={{ padding: "4px 0px" }}>
                <Space style={{ width: "80px" }}>Đã cọc:</Space>
                {parseInt(
                  (order.purchaseFee * 0.7).toFixed(0)
                ).toLocaleString()}
                (vnđ)
              </Space>
              <Space style={{ padding: "4px 0px" }}>
                <Space style={{ width: "80px" }}>Còn lại:</Space>
                {parseInt(
                  (order.purchaseFee * 0.3).toFixed(0)
                ).toLocaleString()}
                (vnđ)
              </Space>
            </Flex>
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <Flex justify="center">
              <Link to={`/order/list-orders/${order._id}`}>
                <FaEye style={{ color: "#fb5731" }} />
              </Link>
            </Flex>
          </td>
        </tr>
      </tbody>
    </>
  );
};

const ListOrders = () => {
  const { carts } = useSelector((state) => state.carts);
  const { orders } = useSelector((state) => state.orders);
  const { decodedToken } = useDecodedToken("token");
  const dispatch = useDispatch();
  useEffect(() => {
    const check = async () => {
      if (decodedToken) {
        dispatch(listOrderMe({ userId: decodedToken.id }));
        dispatch(resetState());
      }
    };
    check();
  }, [decodedToken]);

  const [checkedStates, setCheckedStates] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [allCheck, setAllCheck] = useState(false);
  const [totalCheckedPrice, setTotalCheckedPrice] = useState(0);
  useEffect(() => {
    if (carts && carts.products) {
      setCheckedStates(new Array(carts.products.length).fill(false));
      setQuantities(new Array(carts.products.length).fill(1));
    }
  }, [carts]);

  useEffect(() => {
    if (checkedStates.length > 0) {
      setAllCheck(checkedStates.every((isChecked) => isChecked));
    }
  }, [checkedStates]);

  useEffect(() => {
    const totalPrice =
      carts &&
      carts.products &&
      carts.products.reduce((acc, cart, index) => {
        if (checkedStates[index]) {
          return acc + cart.price * 3625 * quantities[index];
        }
        return acc;
      }, 0);
    setTotalCheckedPrice(totalPrice);
  }, [checkedStates, quantities, carts]);

  const handleCheckChange = (index, isChecked) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = isChecked;
    setCheckedStates(newCheckedStates);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div>
            <h2>Toàn bộ đơn hàng</h2>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "1em",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "30%",
                    }}
                  >
                    Mã đơn hàng
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "30%",
                    }}
                  >
                    Trạng thái
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "30%",
                    }}
                  >
                    Tổng giá tiền
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "10%",
                    }}
                  >
                    Xem chi tiết
                  </th>
                </tr>
              </thead>
              {orders ? (
                orders.map((order, index) => {
                  return (
                    <ProductItem
                      key={index}
                      order={order}
                      index={index}
                      isCheck={checkedStates[index]}
                      onCheckChange={handleCheckChange}
                      onQuantityChange={handleQuantityChange}
                    />
                  );
                })
              ) : (
                <span className="green">
                  Hiện tại không có sản phẩm nào trong giỏ hàng
                </span>
              )}
            </table>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ListOrders;