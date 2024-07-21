/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProductFromCart,
  getCartDetail,
  resetState,
  setBuyProduct,
} from "../../../redux/cartSlice/cartSlice";
import { jwtDecode } from "jwt-decode";
import "./Cart.css";
import {
  Checkbox,
  Col,
  Flex,
  Image,
  Input,
  Modal,
  notification,
  Row,
  Space,
} from "antd";
import useDecodedToken from "../../../components/UserInfor";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { openNotificationWithIcon } from "../../../components/Nofitication";

const ProductItem = ({
  cart,
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
            <Input
              type="number"
              value={quantity}
              min={1}
              onChange={handleQuantityChange}
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
                    ? `${(cart.price * 3625 * quantity).toLocaleString("vi-VN")}
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
            <Flex justify="center">
              <button
                onClick={showModal}
                style={{
                  background: "none",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                <RiDeleteBack2Fill style={{ width: "20px", height: "20px" }} />
              </button>
              <Modal
                title="Bạn muốn xoá sản phẩm này chứ?"
                open={isModalOpen}
                onOk={() => handleDelete(cart.productId)}
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
              ></Modal>
            </Flex>
          </td>
        </tr>
      </tbody>
    </>
  );
};

const Cart = () => {
  const { carts } = useSelector((state) => state.carts);
  const { decodedToken } = useDecodedToken("token");
  const dispatch = useDispatch();

  useEffect(() => {
    const check = async () => {
      if (decodedToken) {
        dispatch(getCartDetail({ userId: decodedToken.id }));
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
    navigate("/dashboard/cart/step2");
  };

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div>
            <h2>Giỏ hàng</h2>
            {/* <div className="container">
                <ul className="progressbar">
                  <li className="active">Chọn shop</li>
                  <li>Chọn địa chỉ nhận hàng</li>
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
              {" "}
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "10%",
                    }}
                  >
                    Chọn mua
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "30%",
                    }}
                  >
                    Sản phẩm
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "10%",
                    }}
                  >
                    Số lượng
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "10%",
                    }}
                  >
                    Đơn giá
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "15%",
                    }}
                  >
                    Tổng tiền
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "20%",
                    }}
                  >
                    Đơn giá
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      width: "5%",
                    }}
                  >
                    Xoá
                  </th>
                </tr>
              </thead>
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
            </table>
            <Flex className="wrapper_buy_step_1" justify="space-between">
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
                <Space>Chọn mua toàn bộ các sản phẩm</Space>
              </label>
              <Space>
                Tổng tiền hàng:
                <span style={{ color: "red" }}>
                  {totalCheckedPrice &&
                    totalCheckedPrice.toLocaleString("vi-VN")}
                  đ
                </span>
              </Space>
              <button
                className="btn_step_1"
                onClick={handlePlaceOrder}
                // disabled={!totalCheckedPrice}
              >
                Đặt hàng ngay
              </button>
            </Flex>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
