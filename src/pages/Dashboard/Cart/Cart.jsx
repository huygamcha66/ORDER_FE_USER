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
import { MdOutlineDelete } from "react-icons/md";
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
            {parseInt(cart.price * 3625)
              .toFixed(0)
              .toLocaleString("vi-VN")}{" "}
            đ<br />¥{cart.price.toLocaleString("zh-CN")}
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              fontWeight: "bolder",
            }}
          >
            {(cart.price * 3625 * quantity).toLocaleString("vi-VN")} đ
            <br />¥{(cart.price * quantity).toLocaleString("zh-CN")}
          </td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            <div>
              <div style={{ padding: "4px 0px" }}>
                <Space style={{ width: "90px" }}>Tiền hàng:</Space>
                <span style={{ fontWeight: "bold" }}>
                  {isCheck
                    ? `${(cart.price * 3625 * quantity).toLocaleString("vi-VN")}
                    đ`
                    : 0}
                </span>
              </div>
              <div style={{ padding: "4px 0px" }}>
                <Space style={{ width: "90px" }}>Phí tạm tính:</Space>
                <span style={{ fontWeight: "bold" }}>
                  {isCheck
                    ? `${parseInt(
                        (cart.price * 3625 * quantity * 0.03).toFixed(0)
                      ).toLocaleString("vi-VN")}
                    đ`
                    : 0}
                </span>
              </div>
              <div style={{ padding: "4px 0px" }}>
                <Space style={{ width: "90px" }}>Đặt cọc:</Space>
                <span style={{ fontWeight: "bold" }}>
                  {isCheck
                    ? `${parseInt(
                        (cart.price * 3625 * quantity * 0.7).toFixed(0)
                      ).toLocaleString("vi-VN")}
                    đ`
                    : 0}
                </span>
              </div>
              <div style={{ padding: "4px 0px" }}>
                <Space style={{ width: "90px" }}>Tổng:</Space>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {isCheck
                    ? `${parseInt(
                        (cart.price * 3625 * quantity * 1.03).toFixed(0)
                      ).toLocaleString("vi-VN")}
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
                <MdOutlineDelete style={{ width: "20px", height: "20px" }} />
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
    setTotalCheckedPrice(totalPrice * 1.03);
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
    navigate("/cart/step2");
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
            <h2>Giỏ hàng</h2>

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
                <h4> Tổng tiền hàng:</h4>
                <span style={{ color: "red" }}>
                  {totalCheckedPrice &&
                    parseInt(totalCheckedPrice.toFixed(0)).toLocaleString(
                      "vi-VN"
                    )}
                  đ
                </span>
              </Space>
              <button className="btn_step_1" onClick={handlePlaceOrder}>
                Đặt hàng ngay
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
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
