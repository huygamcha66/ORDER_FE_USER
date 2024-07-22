/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { Col, Flex, notification, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useDecodedToken from "../../../../components/UserInfor";
import { openNotificationWithIcon } from "../../../../components/Nofitication";
import { FaEye } from "react-icons/fa";

import {
  deleteProductFromCart,
  getCartDetail,
  resetState,
  setBuyProduct,
} from "../../../../redux/cartSlice/cartSlice";
import { jwtDecode } from "jwt-decode";
import { getOrderList } from "../../../../redux/orderSlice/orderSlice";

const ProductItem = ({
  order,
  index,
  isCheck,
  onCheckChange,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    onQuantityChange(index, newQuantity);
  };

  const handleDelete = (value) => {
    const userInfor = localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null;
    setIsModalOpen(false);
    dispatch(deleteProductFromCart({ userId: userInfor.id, productId: value }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
                <FaEye />
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
        dispatch(getOrderList({ userId: decodedToken.id }));
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

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!totalCheckedPrice) {
      // return setIsModalOpen(true);
      return openNotificationWithIcon("error", "Vui lòng chọn sản phẩm");
    }

    // Lọc các sản phẩm đã chọn và bao gồm số lượng
    const selectedProducts = carts.products
      .map((product, index) => {
        if (checkedStates[index]) {
          return {
            ...product,
            quantity: quantities[index], // Thêm số lượng
          };
        }
        return null;
      })
      .filter((product) => product !== null); // Lọc các sản phẩm không được chọn

    dispatch(setBuyProduct(selectedProducts));
    navigate("/cart/step2");
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
