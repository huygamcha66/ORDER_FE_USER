/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProductFromCart } from "../../../redux/cartSlice/cartSlice";
import { jwtDecode } from "jwt-decode";
import { createOrder } from "../../../redux/orderSlice/orderSlice";
import { Col, Row } from "antd";

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
              style={{ border: "1px solid #ddd", padding: "8px", width: "7%" }}
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
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <div style={{ display: "flex" }}>
                <img
                  src={cart.coverImageUrl}
                  alt="Sản phẩm"
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <a target="_blank" href={cart.productUrl}>
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
              {(cart.price * 3625).toLocaleString("vi-VN")} đ<br />
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                fontWeight: "bolder",
              }}
            >
              {(cart.price * 3625 * cart.quantity).toLocaleString("vi-VN")} đ
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const CartStep2 = () => {
  const { carts, buyProduct } = useSelector((state) => state.carts);

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
  };

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div className="shoping_cart">
            <div className="col-md-12">
              <h2 className="page-title">Giỏ hàng</h2>
              <div className="container">
                <ul className="progressbar">
                  <li>Chọn shop</li>
                  <li className="active">Chọn địa chỉ nhận hàng</li>
                  <li>Lên đơn</li>
                </ul>
              </div>
              <br />
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
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: 0,
              background: "#fcebf2",
              padding: "40px",
              marginLeft: "-10%",
              width: "110%",
              zIndex: 999,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ display: "flex", justifyItems: "center" }}>
                <input
                  checked={allCheck}
                  onChange={handleAllCheckChange}
                  type="checkbox"
                  style={{ width: "25px", height: "25px" }}
                />
                <h4 style={{ lineHeight: "30px", marginLeft: "6px" }}>
                  Số tiền tạm thời phải trả
                </h4>
              </div>
              <h4 style={{ lineHeight: "30px", marginLeft: "6px" }}>
                Tổng tiền cọc (70%){" "}
                <span style={{ color: "red" }}>
                  {totalCheckedPrice &&
                    totalCheckedPrice.toLocaleString("vi-VN")}
                  đ
                </span>
              </h4>
              <button
                onClick={handleSubmit}
                disabled={!totalCheckedPrice}
                style={{
                  background: "#008001",
                  border: "none",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                Gửi đơn
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CartStep2;
