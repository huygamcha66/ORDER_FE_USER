/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteProductFromCart,
  getCartDetail,
} from "../../../redux/cartSlice/cartSlice";
import { jwtDecode } from "jwt-decode";
import { createOrder } from "../../../redux/orderSlice/orderSlice";
import { Col, Flex, Image, Modal, Row, Space } from "antd";
import "./Cart.css";
import { openNotificationWithIcon } from "../../../components/Nofitication";
import useDecodedToken from "../../../components/UserInfor";

const ProductItem = ({ cart }) => {
  console.log("««««« cart »»»»»", cart);
  return (
    <tbody>
      <tr>
        <td style={{ border: "1px solid #ddd", padding: "8px", width: "40%" }}>
          <div style={{ display: "flex" }}>
            <img
              src={cart.coverImageUrl}
              alt="Sản phẩm"
              style={{ width: "50px", marginRight: "10px" }}
            />
            <a style={{ color: "#000" }} target="_blank" href={cart.productUrl}>
              {cart.name}
            </a>
          </div>
        </td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          <Flex justify="center">{cart.quantity}</Flex>
        </td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          <Flex justify="center">
            {parseInt((cart.price * 3625 * 1.03).toFixed(0)).toLocaleString(
              "vi-VN"
            )}{" "}
            đ
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
            {parseInt(
              (cart.price * 3625 * 1.03 * cart.quantity).toFixed(0)
            ).toLocaleString("vi-VN")}{" "}
            đ
          </Flex>
        </td>
      </tr>
    </tbody>
  );
};

const CartStep2 = () => {
  const { carts } = useSelector((state) => state.carts);
  const [totalCheckedPrice, setTotalCheckedPrice] = useState(0);
  const [totalCheckedDeposit, setTotalCheckedDeposit] = useState(0);
  const { decodedToken } = useDecodedToken("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (decodedToken) {
      dispatch(getCartDetail({ userId: decodedToken.id }));
    }
  }, [decodedToken, dispatch, location.pathname]);
  useEffect(() => {
    console.log("««««« carts.products »»»»»", carts.products);
    const totalPrice =
      carts &&
      carts.products &&
      carts.products.reduce((acc, value) => {
        if (value.check)
          return acc + value.price * 3625 * parseInt(value.quantity) * 1.03;
      }, 0);

    // Version Old(thiểu return về acc khi không được chọn)
    // const totalDeposit =
    //   carts &&
    //   carts.products &&
    //   carts.products.reduce((acc, value) => {
    //     console.log("««««« value »»»»»", value);
    //     if (value.check) return acc + value.price * 3625 * value.quantity * 0.7;
    //   }, 0);
    // improve: đọc comt
    const totalDeposit =
      carts &&
      carts.products &&
      carts.products.reduce((acc, value) => {
        if (value.check) {
          // Tính tiền đặt cọc cho sản phẩm nếu đã chọn
          return acc + value.price * 3625 * value.quantity * 0.7;
        }
        // Nếu sản phẩm không được chọn, trả lại giá trị hiện tại của acc
        return acc;
      }, 0);
    console.log("««««« totalDeposit »»»»»", totalDeposit);
    setTotalCheckedDeposit(totalDeposit);
    setTotalCheckedPrice(totalPrice);
  }, [carts]);

  const handleSubmit = () => {
    const userInfor = localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null;
    const finalProduct = carts.products.map((product) => ({
      ...product,
      properties: "",
    }));
    dispatch(
      createOrder({
        userId: userInfor.id,
        productList: finalProduct,
        purchaseFee: totalCheckedPrice,
      })
    );
    openNotificationWithIcon("success", "Đặt hàng thành công");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div>
            <div>
              <h2>Giỏ hàng</h2>

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
                {carts.products &&
                  carts.products.map((cart, index) => {
                    if (cart.check) {
                      return (
                        <ProductItem key={index} cart={cart} index={index} />
                      );
                    }
                  })}
              </table>
            </div>
          </div>
          {carts.products && carts.products.length > 0 && (
            <Flex justify="space-between" className="wrapper_buy_step_1">
              <Space>
                <Space> Tổng tiền cọc (70%):</Space>
                <span style={{ color: "red" }}>
                  {totalCheckedDeposit &&
                    parseInt(totalCheckedDeposit.toFixed(0)).toLocaleString(
                      "vi-VN"
                    )}
                  đ
                </span>
              </Space>
              <button onClick={handleSubmit} className="btn_step_1">
                <Space style={{ padding: "5px" }}> Gửi đơn</Space>
              </button>
            </Flex>
          )}
        </Col>
      </Row>
    </>
  );
};

export default CartStep2;
