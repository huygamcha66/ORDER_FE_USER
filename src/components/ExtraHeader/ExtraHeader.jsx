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
import "./index.css";
import { logoutUser, resetState } from "../../redux/userSlice/userSlice";
import useDecodedToken from "../UserInfor";
import { useEffect } from "react";
const items = [
  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/dashboard/member/profile"}>
        TÀI KHOẢN
      </Link>
    ),
    key: "me",
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
            label: <Link to={"/bang-gia-ky-gui-hang"}>ĐANG CHỜ CỌC</Link>,
            key: "order:2",
          },
          {
            label: (
              <Link
                to={
                  "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                }
              >
                ĐƠN HÀNG THÀNH CÔNG
              </Link>
            ),
            key: "order:3",
          },
          {
            label: (
              <Link
                to={
                  "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                }
              >
                TOÀN BỘ ĐƠN HÀNG
              </Link>
            ),
            key: "order:4",
          },

          {
            label: (
              <Link
                to={
                  "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                }
              >
                KHIẾU NẠI
              </Link>
            ),
            key: "order:5",
          },
        ],
      },
    ],
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/bang-gia"}>
        KIỆN HÀNG
      </Link>
    ),
    key: "listOrder",
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to={"/bang-gia"}>DANH SÁCH KIỆN</Link>,
            key: "listOrder:1",
          },
          {
            label: <Link to={"/bang-gia-ky-gui-hang"}>TRA CỨU KIỆN HÀNG</Link>,
            key: "listOrder:2",
          },

          {
            label: (
              <Link
                to={
                  "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                }
              >
                PHÍ VC NỘI ĐỊA
              </Link>
            ),
            key: "listOrder:3",
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
      <Link style={{ fontWeight: 700 }} to={""}>
        BẢNG GIÁ
      </Link>
    ),
    key: "price",
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={""}>
        THÔNG TIN THANH TOÁN
      </Link>
    ),
    key: "qrcode",
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/dashboard/shop"}>
        SHOP UY TÍN
      </Link>
    ),
    key: "shop",
  },
];

const ExtraHeader = () => {
  // const user = useSelector(selectCurrentUser);
  const { decodedToken, errorToken } = useDecodedToken("token");
  const { success, user, error, isLoading, isActive } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirm = (e) => {
    dispatch(logoutUser(decodedToken.id));
  };
  useEffect(() => {
    if (success) {
      navigate("/login");
      dispatch(resetState());
    }
  }, [success]);

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
            <Row style={{ marginTop: "30px" }}>
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
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <Col span={24}>
                <Flex justify="space-between">
                  <Flex className="primary_color">123</Flex>
                  <Flex>
                    <Flex align="center" className="custommlr">
                      <PiMathOperations className="icon primary_color" />
                      <Space className="custompl primary_color">Tỉ giá: </Space>
                    </Flex>
                    <Flex align="center" className="custommlr">
                      <IoPricetagsOutline className="icon primary_color" />
                      <Space className="custompl primary_color">Số dư:</Space>
                    </Flex>
                    <Flex align="center" className="custommlr">
                      <FaRegUser className="icon primary_color" />
                      <Space className="custompl primary_color">
                        Tài khoản
                      </Space>
                    </Flex>
                    <Flex align="center" className="custommlr">
                      <LuShoppingCart className="icon primary_color" />
                      <Link className="custompl primary_color" to={"cart"}>
                        Giỏ hàng
                      </Link>
                    </Flex>

                    <Flex className="wrapper_icon_text" align="center">
                      <Popconfirm
                        title="Đăng xuất"
                        description="Bạn có muốn đăng xuất không?"
                        onConfirm={confirm}
                        okText="Có"
                        cancelText="Không"
                      >
                        <Flex style={{ cursor: "pointer" }}>
                          <AiOutlineLogout className="icon primary_color" />
                          <Space className="custompl primary_color">
                            Đăng xuất
                          </Space>
                        </Flex>
                      </Popconfirm>
                    </Flex>
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
