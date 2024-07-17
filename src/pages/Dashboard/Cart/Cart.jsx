/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProductFromCart,
  getCartDetail,
  setBuyProduct,
} from "../../../redux/cartSlice/cartSlice";
import { jwtDecode } from "jwt-decode";
import { Checkbox, Col, Flex, Row } from "antd";
import useDecodedToken from "../../../components/UserInfor";

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

  // const handleDetele = (value) => {
  //   const userInfor = localStorage.getItem("token")
  //     ? jwtDecode(localStorage.getItem("token"))
  //     : null;
  //   const result = confirm("bạn có muốn xoá không");
  //   if (result) {
  //     console.log("««««« value »»»»»", value);
  //     dispatch(
  //       deleteProductFromCart({ userId: userInfor._id, productId: value })
  //     );
  //   }
  // };
  const handleDelete = (value) => {
    const userInfor = localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null;
    const result = confirm("bạn có muốn xoá không");
    if (result) {
      dispatch(
        deleteProductFromCart({ userId: userInfor.id, productId: value })
      );
    }
  };

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
            <th
              style={{ border: "1px solid #ddd", padding: "8px", width: "5%" }}
            >
              Chọn mua
            </th>
            <th
              style={{ border: "1px solid #ddd", padding: "8px", width: "30%" }}
            >
              Sản phẩm
            </th>
            <th
              style={{ border: "1px solid #ddd", padding: "8px", width: "10%" }}
            >
              Số lượng
            </th>
            <th
              style={{ border: "1px solid #ddd", padding: "8px", width: "10%" }}
            >
              Đơn giá
            </th>
            <th
              style={{ border: "1px solid #ddd", padding: "8px", width: "15%" }}
            >
              Tổng tiền
            </th>
            <th
              style={{ border: "1px solid #ddd", padding: "8px", width: "20%" }}
            >
              Đơn giá
            </th>
            <th
              style={{ border: "1px solid #ddd", padding: "8px", width: "10%" }}
            >
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <Flex justify="center">
                <Checkbox
                  type="checkbox"
                  checked={isCheck}
                  onChange={() => onCheckChange(index, !isCheck)}
                />
              </Flex>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <div style={{ display: "flex" }}>
                <img
                  src={cart.coverImageUrl}
                  alt="Sản phẩm"
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <a
                  target="_blank"
                  style={{ color: "#000" }}
                  href={cart.productUrl}
                >
                  {cart.name}
                </a>
              </div>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={handleQuantityChange}
                style={{ width: "50px" }}
              />
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {(cart.price * 3625).toLocaleString("vi-VN")} đ<br />¥{cart.price}
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                fontWeight: "bolder",
              }}
            >
              {(cart.price * 3625 * quantity).toLocaleString("vi-VN")} đ
              <br />¥{cart.price * quantity}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <div>
                <div style={{ marginBottom: "0.5em" }}>
                  <label>Tiền hàng:</label>
                  <span style={{ marginLeft: "0.5em", fontWeight: "bold" }}>
                    {isCheck
                      ? `${(cart.price * 3625 * quantity).toLocaleString(
                          "vi-VN"
                        )}
                    đ`
                      : 0}
                  </span>
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                  <label>Phí tạm tính:</label>
                  <span style={{ marginLeft: "0.5em", fontWeight: "bold" }}>
                    {isCheck
                      ? `${(cart.price * 3625 * quantity * 0.03).toLocaleString(
                          "vi-VN"
                        )}
                    đ`
                      : 0}
                  </span>
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                  <label>Đặt cọc:</label>
                  <span style={{ marginLeft: "0.5em", fontWeight: "bold" }}>
                    {isCheck
                      ? `${(cart.price * 3625 * quantity * 0.7).toLocaleString(
                          "vi-VN"
                        )}
                    đ`
                      : 0}
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    marginBottom: "0.5em",
                  }}
                >
                  <label>Tổng:</label>
                  <span style={{ marginLeft: "0.5em", fontWeight: "bold" }}>
                    {isCheck
                      ? `${(cart.price * 3625 * quantity * 1.03).toLocaleString(
                          "vi-VN"
                        )}
                    đ`
                      : 0}
                  </span>
                </div>
              </div>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <button
                onClick={() => handleDelete(cart.productId)}
                style={{ background: "none", border: "none", color: "red" }}
              >
                <i className="fas fa-trash-alt"></i> Xóa sản phẩm
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Cart = () => {
  const { carts } = useSelector((state) => state.carts);
  const { decodedToken } = useDecodedToken("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (decodedToken) {
      dispatch(getCartDetail({ userId: decodedToken.id }));
    }
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
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
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
    navigate("/dashboard/cart/step2");
  };

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div className="shoping_cart">
            <div className="col-md-12">
              <h2 className="page-title">Giỏ hàng</h2>
              {/* <div className="container">
                <ul className="progressbar">
                  <li className="active">Chọn shop</li>
                  <li>Chọn địa chỉ nhận hàng</li>
                  <li>Lên đơn</li>
                </ul>
              </div> */}
              <br />
              {carts && carts.products ? (
                carts.products.map((cart, index) => (
                  <ProductItem
                    key={index}
                    cart={cart}
                    index={index}
                    isCheck={checkedStates[index]}
                    onCheckChange={handleCheckChange}
                    onQuantityChange={handleQuantityChange}
                  />
                ))
              ) : (
                <span className="green">
                  Hiện tại không có sản phẩm nào trong giỏ hàng
                </span>
              )}
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
                  Chọn mua toàn bộ các sản phẩm
                </h4>
              </div>
              <h4 style={{ lineHeight: "30px", marginLeft: "6px" }}>
                Tổng tiền hàng:{" "}
                <span style={{ color: "red" }}>
                  {totalCheckedPrice &&
                    totalCheckedPrice.toLocaleString("vi-VN")}
                  đ
                </span>
              </h4>
              <button
                onClick={handlePlaceOrder}
                disabled={!totalCheckedPrice}
                style={{
                  background: "#008001",
                  border: "none",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                Đặt hàng ngay
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
