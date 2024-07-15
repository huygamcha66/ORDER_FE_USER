/* eslint-disable quotes */
/* eslint-disable semi */
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Flex, Row, Space } from "antd";
import { Menu } from "antd";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiMathOperations } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import "./index.css";
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
      <Link style={{ fontWeight: 700 }} to={""}>
        SHOP UY TÍN
      </Link>
    ),
    key: "shop",
  },
];

const ExtraHeader = () => {
  // const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.carts);

  return (
    <Row justify="center">
      <Col xs={24} lg={20}>
        <Row style={{ marginTop: "30px" }}>
          <Col span={24}>
            <Flex justify="space-between">
              <Space>Kho hàng Đà Nẵng: 0703414511</Space>
              <Space>Kho hàng Đà Nẵng: 0703414511</Space>
              <Space>Kho hàng Đà Nẵng: 0703414511</Space>
            </Flex>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col span={24}>
            <Flex justify="space-between">
              <Flex>123</Flex>
              <Flex>
                <Flex align="center" className="custommlr">
                  <PiMathOperations className="icon" />
                  <Space className="custompl">Tỉ giá: </Space>
                </Flex>
                <Flex align="center" className="custommlr">
                  <IoPricetagsOutline className="icon" />
                  <Space className="custompl">Số dư:</Space>
                </Flex>
                <Flex align="center" className="custommlr">
                  <FaRegUser className="icon" />
                  <Space className="custompl"> Tài khoản</Space>
                </Flex>
                <Flex align="center" className="custommlr">
                  <LuShoppingCart className="icon" />
                  <Link className="custompl" to={""}>
                    Giỏ hàng
                  </Link>
                </Flex>
                <Flex align="center">
                  <AiOutlineLogout className="icon" />
                  <Link className="custompl" to={""}>
                    Đăng xuất
                  </Link>
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
  );
};

export default ExtraHeader;
