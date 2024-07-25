/* eslint-disable react/no-unknown-property */
/* eslint-disable quotes */
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import "./index.css";
import { IoIosLogIn } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  ConfigProvider,
  Drawer,
  Flex,
  Input,
  Row,
  Space,
} from "antd";
const { Search } = Input;
import { Menu } from "antd";
const items = [
  {
    label: (
      <Link style={{ fontWeight: 700 }} to={""}>
        TRANG CHỦ
      </Link>
    ),
    key: "home",
  },

  {
    label: (
      <Link style={{ fontWeight: 700 }} to={"/tracking"}>
        VẬN ĐƠN
      </Link>
    ),
    key: "tracking",
  },

  // {
  //   label: (
  //     <Link style={{ fontWeight: 700 }} to={"/category/tin-tuc"}>
  //       TIN TỨC
  //     </Link>
  //   ),
  //   key: "new",
  // },
];
const HeaderScreen = () => {
  const [showNav, setShowNav] = useState(false);
  // nút scrollTo
  const [isHovered, setIsHovered] = useState(false);
  const [code, SetCode] = useState("");
  const onSearch = (value) => SetCode(value);

  // nút navbar menu mobile
  const [menu, SetMenu] = useState(false);
  // nút dropdown trong navbar menu mobile
  const [dropdownMenu, SetDropDownMenu] = useState(false);

  const handleMenuClose = () => {
    SetMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // click outside of menu mobile
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleMenuClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // mobile navigation
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
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
        <div className="wrapper_header">
          <Row justify="center">
            <Col style={{ margin: "20px 0px" }} xs={22} lg={20}>
              <Row>
                <Col xs={0} sm={24}>
                  <Flex justify="space-between">
                    {/* <Flex align="center">
                      <Space>
                        <img
                          className="icon"
                          width="30"
                          src="https://orderhangquangchau.com/wp-content/uploads/tien-te.png"
                        />
                      </Space>
                      <Space> Tỉ giá: : 3625</Space>
                    </Flex> */}
                    <Flex>
                      <a
                        href="mailto:orderkieunghia@gmail.com"
                        className="tooltip"
                        title="orderkieunghia@gmail.com"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Flex align="center">
                          <MdOutlineMail className="icon" />
                          <span>orderkieunghia@gmail.com </span>
                        </Flex>
                      </a>
                    </Flex>
                    <Flex>
                      <a
                        href="tel:0931.943.439"
                        className="tooltip"
                        title="0931.943.439"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Flex align="center">
                          <CiPhone className="icon" />
                          <span>0931.943.439</span>
                        </Flex>
                      </a>
                    </Flex>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col xs={22} lg={20}>
              <Row
                style={{ display: "flex", justifyItems: "center" }}
                gutter={10}
              >
                <Col xs={3} sm={0}>
                  <Button type="primary" onClick={showDrawer}>
                    <FaBars />
                  </Button>
                  <Drawer
                    title="Order Kiều Nghĩa"
                    onClose={onClose}
                    open={open}
                  >
                    <Row>
                      <Col xs={24} sm={6} md={9} lg={9} xl={4}>
                        <Flex vertical>
                          <a
                            href="tel:0931.943.439"
                            className="tooltip"
                            title="0931.943.439"
                          >
                            <CiPhone className="icon" />
                            <span>0931.943.439</span>
                          </a>
                          <a
                            href="mailto:orderkieunghia@gmail.com"
                            className="tooltip"
                            title="orderkieunghia@gmail.com"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <MdOutlineMail className="icon" />
                            <span>orderkieunghia@gmail.com </span>
                          </a>
                          <Link to={"/register"} rel="noreferrer">
                            <FaRegUser />{" "}
                            <Space style={{ fontSize: "16px" }}>Đăng ký</Space>
                          </Link>
                          <Link to={"/login"} rel="noreferrer">
                            <IoIosLogIn />{" "}
                            <Space style={{ fontSize: "16px" }}>
                              Đăng nhập
                            </Space>
                          </Link>
                        </Flex>
                      </Col>
                    </Row>
                  </Drawer>
                </Col>
                <Col xs={21} sm={3} md={3} lg={3} xl={3}>
                  <img
                    style={{ width: "100%", height: "34px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKa0LUcDvnOCEma8jybXgVv_ls65cPDDchFQ&s"
                    className="header_logo header-logo"
                    alt="Order Kiều Nghĩa &#8211; Đặt hàng nhanh chỉ 5-7 ngày Uy tín Giá rẻ"
                  />
                </Col>
                <Col xs={24} sm={15} md={12} lg={12} xl={17}>
                  <Search
                    placeholder="Nhập mã vận đơn cần tra cứu"
                    onSearch={onSearch}
                    enterButton
                  />
                </Col>
                <Col xs={0} sm={6} md={9} lg={9} xl={4}>
                  <Flex align="center" justify="space-between">
                    <Link to={"/register"} rel="noreferrer">
                      <FaRegUser />{" "}
                      <Space style={{ fontSize: "16px" }}>Đăng ký</Space>
                    </Link>
                    <Link to={"/login"} rel="noreferrer">
                      <IoIosLogIn />{" "}
                      <Space style={{ fontSize: "16px" }}>Đăng nhập</Space>
                    </Link>
                  </Flex>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ borderBottom: "1px solid #dddddd" }} justify="center">
            <Col xs={23} lg={20}>
              <Row justify="center">
                <Col span={24}>
                  <Menu
                    style={{
                      background: "#fb5731",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
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
    </>
  );
};

export default HeaderScreen;
