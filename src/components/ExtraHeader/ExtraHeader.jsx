/* eslint-disable quotes */
/* eslint-disable semi */
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  ConfigProvider,
  Flex,
  Popconfirm,
  Row,
  message,
  Space,
} from "antd";
import { Menu } from "antd";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiMathOperations } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
import "./index.css";
import {
  detailMe,
  logoutUser,
  resetState,
} from "../../redux/userSlice/userSlice";
import useDecodedToken from "../UserInfor";
import { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
import { getCartDetail } from "../../redux/cartSlice/cartSlice";
const items = [
  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/"}>
        TRANG CHỦ
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/bang-gia"}>
        ĐƠN HÀNG
      </Link>
    ),
    key: "order",
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/bang-gia"}>TẠO ĐƠN HÀNG</Link>,
            key: "order:1",
          },

          {
            label: <Link to={"/order/list-orders"}>ĐƠN HÀNG CỦA TÔI</Link>,
            key: "order:4",
          },
        ],
      },
    ],
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/bang-gia"}>
        TÀI CHÍNH
      </Link>
    ),
    key: "finance",
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/bang-gia"}>XEM GIAO DỊCH</Link>,
            key: "finance:1",
          },
          {
            label: <Link to={"/bang-gia-ky-gui-hang"}>NẠP TIỀN</Link>,
            key: "finance:2",
          },
        ],
      },
    ],
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/chuyen-khoan"}>
        THÔNG TIN THANH TOÁN
      </Link>
    ),
    key: "qrcode",
  },
  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/bang-gia"}>
        BẢNG GIÁ
      </Link>
    ),
    key: "SubMenu",
    children: [
      {
        type: "group",
        children: [
          {
            label: (
              <Link to={"/bang-gia"}>Bảng giá dịch vụ đặt hàng Trung Quốc</Link>
            ),
            key: "setting:1",
          },
          {
            label: (
              <Link to={"/bang-gia-ky-gui-hang"}>
                Bảng giá ký gửi vận chuyển
              </Link>
            ),
            key: "setting:2",
          },
          {
            label: (
              <Link
                to={
                  "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                }
              >
                Bảng giá dịch vụ chuyển tiền
              </Link>
            ),
            key: "setting:3",
          },
        ],
      },
    ],
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/chinh-sach-bao-mat"}>
        CHÍNH SÁCH
      </Link>
    ),
    key: "policy",
  },

  {
    label: (
      <Link
        style={{ fontWeight: 700 }}
        to={"/huong-dan-mua-hang-tren-taobao-1688"}
      >
        HƯỚNG DẪN
      </Link>
    ),
    key: "direction",
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/shop"}>
        SHOP UY TÍN
      </Link>
    ),
    key: "shop",
  },
];

const ExtraHeader = () => {
  // const user = useSelector(selectCurrentUser);
  const { decodedToken, errorToken } = useDecodedToken("token");
  const { success, user } = useSelector((state) => state.users);
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirm = (e) => {
    dispatch(logoutUser(decodedToken.id));
  };
  console.log("««««« user »»»»»", user);
  useEffect(() => {
    if (success) {
      navigate("/login");
      window.location.reload();
      dispatch(resetState());
    }
  }, [success]);

  // useEffect(() => {
  //   if (decodedToken) {
  //     dispatch(resetState());
  //   }
  // }, [decodedToken, dispatch]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            fontSize: 12,
            padding: 14,
            horizontalItemSelectedColor: "#000",
            itemColor: "#fff",
            itemSelectedColor: "#fc785a",
            popupBg: "#fc785a",
          },
        },
      }}
    >
      <div className="wrapper_extraHeader">
        <Row justify="center">
          <Col xs={24} lg={20}>
            {/* <Row style={{ marginTop: "30px" }}>
              <Col span={24}>
                <Flex justify="space-between">
                  <Space className="primary_color">
                    Kho hàng Đà Nẵng: 0703414511
                  </Space>
                  <Space className="primary_color">
                    Kho hàng Đà Nẵng: 0703414511
                  </Space>
                  <Space className="primary_color">
                    Kho hàng Đà Nẵng: 0703414511
                  </Space>
                </Flex>
              </Col>
            </Row> */}
            <Row style={{ marginTop: "30px" }}>
              <Col span={24}>
                <Flex justify="space-between">
                  <Flex className="primary_color">Logo</Flex>
                  <Flex>
                    {/* <Flex align="center" className="custommlr">
                      <PiMathOperations className="icon primary_color" />
                      <Space className="custompl primary_color">Tỉ giá: </Space>
                    </Flex> */}
                    <Flex align="center" className="custommlr">
                      <IoPricetagsOutline className="icon primary_color" />
                      <div className="custompl primary_color">
                        Số dư:{" "}
                        {user && user.user
                          ? parseInt(
                              user.user.accountBalance.toFixed(0)
                            ).toLocaleString()
                          : 0}{" "}
                        đ
                      </div>
                    </Flex>

                    <Flex align="center" className="custommlr">
                      {/* <Space className="quantity_cart_children">
                        {carts && carts.products && carts.products.length}
                      </Space> */}
                      <Link className="custompl  extra_header_cart" to={"cart"}>
                        <Flex align="center">
                          <LuShoppingCart className="icon quantity_cart" />
                          <span style={{ position: "relative" }}>
                            <Space
                              style={{
                                position: "absolute",
                                top: -15,
                                left: -5,
                                background: "#fff",
                                padding: "1px 6px",
                                borderRadius: "30%",
                                color: "#fb5731",
                              }}
                            >
                              {carts && carts.products
                                ? carts.products.length
                                : 0}
                            </Space>
                            Giỏ hàng
                          </span>
                        </Flex>
                      </Link>
                    </Flex>
                    {!errorToken ? (
                      <>
                        <Link to={"/member/profile"}>
                          {" "}
                          <Flex
                            align="center"
                            className="custommlr extra_header_cart primary_color"
                          >
                            <FaRegUser className="icon primary_color" />
                            Tài khoản
                          </Flex>
                        </Link>
                        <Flex className="wrapper_icon_text" align="center">
                          <Popconfirm
                            title="Đăng xuất"
                            description="Bạn có muốn đăng xuất không?"
                            onConfirm={confirm}
                            okText="Có"
                            cancelText="Không"
                          >
                            <Flex
                              align="center"
                              className="custompl extra_header_cart primary_color"
                            >
                              <AiOutlineLogout className="icon primary_color" />
                              Đăng xuất
                            </Flex>
                          </Popconfirm>
                        </Flex>
                      </>
                    ) : (
                      <>
                        <Link to={"/register"} className="custommlr">
                          <Flex
                            align="center"
                            className=" extra_header_cart custompl primary_color"
                          >
                            <FaRegUser className="icon primary_color" />
                            Đăng ký
                          </Flex>
                        </Link>
                        <Link to={"/login"}>
                          <Flex
                            align="center"
                            extra_header_cart
                            className="custompl"
                          >
                            <SlUserFollowing className="icon" />
                            Đăng nhập
                          </Flex>
                        </Link>
                      </>
                    )}
                  </Flex>
                </Flex>
              </Col>
            </Row>

            <Row style={{ marginTop: "30px" }}>
              <Col span={24}>
                <Menu
                  style={{
                    background: "#fb5731",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  mode="horizontal"
                  items={items}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default ExtraHeader;
