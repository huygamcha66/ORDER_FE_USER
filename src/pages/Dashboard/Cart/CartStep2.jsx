/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProductFromCart } from "../../../redux/cartSlice/cartSlice";
import { jwtDecode } from "jwt-decode";
import { createOrder } from "../../../redux/orderSlice/orderSlice";
import { Col, Flex, Image, Modal, Row, Space } from "antd";
import "./Cart.css";
import { openNotificationWithIcon } from "../../../components/Nofitication";

const ProductItem = ({
  cart,
  index,
  isCheck,
  onCheckChange,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setQuantity(1); // Reset quantity on mount
  }, [cart]);

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    onQuantityChange(index, newQuantity);
  };
  console.log("««««« cart »»»»»", cart);

  return (
    <>
      <tbody>
        <tr>
          <td
            style={{ border: "1px solid #ddd", padding: "8px", width: "40%" }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={cart.coverImageUrl}
                alt="Sản phẩm"
                style={{ width: "50px", marginRight: "10px" }}
              />
              <a
                style={{ color: "#000" }}
                target="_blank"
                href={cart.productUrl}
              >
                {cart.name}
              </a>
            </div>
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <input
              type="number"
              value={cart.quantity}
              min={1}
              disabled
              onChange={handleQuantityChange}
              style={{ width: "50px" }}
            />
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <Flex justify="center">
              {(cart.price * 3625).toLocaleString("vi-VN")} đ
            </Flex>
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              fontWeight: "bolder",
            }}
          >
            <Flex justify="center">
              {(cart.price * 3625 * cart.quantity).toLocaleString("vi-VN")} đ
            </Flex>
          </td>
        </tr>
      </tbody>
    </>
  );
};

const CartStep2 = () => {
  const { carts, buyProduct, success } = useSelector((state) => state.carts);

  const [checkedStates, setCheckedStates] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [allCheck, setAllCheck] = useState(false);
  const [totalCheckedPrice, setTotalCheckedPrice] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleAllCheckChange = () => {
    const newAllCheck = !allCheck;
    setAllCheck(newAllCheck);
    setCheckedStates(new Array(carts.products.length).fill(newAllCheck));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };

  const handleSubmit = () => {
    const userInfor = localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null;
    const updateProduct = buyProduct.map((product) => ({
      ...product,
      properties: "",
    }));
    dispatch(
      createOrder({
        userId: userInfor.id,
        productList: updateProduct,
        purchaseFee: totalCheckedPrice,
      })
    );
    openNotificationWithIcon("success", "Đặt hàng thành công");
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
      <Row justify="center">
        <Col xs={20}>
          <div>
            <div>
              <h2>Giỏ hàng</h2>
              {/* <h2 className="page-title">Giỏ hàng</h2>
                <div className="container">
                  <ul className="progressbar">
                    <li>Chọn shop</li>
                    <li className="active">Chọn địa chỉ nhận hàng</li>
                    <li>Lên đơn</li>
                  </ul>
                </div> */}
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: "1em",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Sản phẩm
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        width: "7%",
                      }}
                    >
                      Số lượng
                    </th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Đơn giá
                    </th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Tổng tiền
                    </th>
                  </tr>
                </thead>
                {buyProduct &&
                  buyProduct.map((cart, index) => (
                    <ProductItem
                      key={index}
                      cart={cart}
                      index={index}
                      isCheck={checkedStates[index]}
                      onCheckChange={handleCheckChange}
                      onQuantityChange={handleQuantityChange}
                    />
                  ))}
              </table>
            </div>
          </div>
          <Flex justify="space-between" className="wrapper_buy_step_1">
            <label
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                checked={allCheck}
                onChange={handleAllCheckChange}
                type="checkbox"
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              />
              <Space>Số tiền tạm thời phải trả</Space>
            </label>
            <Space>
              Tổng tiền cọc (70%):
              <span style={{ color: "red" }}>
                {totalCheckedPrice && totalCheckedPrice.toLocaleString("vi-VN")}
                đ
              </span>
            </Space>
            <button
              onClick={handleSubmit}
              disabled={!totalCheckedPrice}
              className="btn_step_1"
            >
              Gửi đơn
            </button>
            <Modal
              title="Bạn không đủ tiền để mua, hãy liên hệ với chúng tôi để nạp tiền vào ví!"
              open={isModalOpen}
              onOk={handleCancel}
              onCancel={handleCancel}
              cancelButtonProps={{
                style: {
                  backgroundColor: "#f5222d",
                  borderColor: "#f5222d",
                  color: "#fff",
                },
              }}
              okButtonProps={{
                style: {
                  backgroundColor: "#ccc",
                  color: "#000",
                },
              }}
              okText="Có"
              cancelText="Không"
              footer={null}
            >
              <Flex justify="center">
                <Image
                  width={350}
                  src="https://pub-50bb58cfabdd4b93abb4e154d0eada9e.r2.dev/zalo.jpg"
                />
              </Flex>
            </Modal>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default CartStep2;
