/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import './Footer.css'
import { IoChevronUp } from 'react-icons/io5'
import { Col, Flex, Row, Space } from 'antd'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  // console.log(
  //   // '«««««  localStorage.getItem("token") »»»»»',
  //   localStorage.getItem("token")
  // );
  // console.log(
  //   "««««« window.scrollY »»»»»",
  //   window.scrollY,
  //   333,
  //   localStorage.getItem("token")
  // );
  return (
    <div className="footer-wrapper">
      <Row
        justify="center"
        style={{
          background: '#fbfbfb',
          padding: '20px 0px',
          borderTop: '1px solid rgb(221, 221, 221)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
        }}
      >
        <Col xs={24} lg={20}>
          <Row gutter={10}>
            <Col xs={24} sm={8}>
              <Flex vertical>
                <Space className="footer_header">HỖ TRỢ KHÁCH HÀNG</Space>
                <a className="header_color_item" href="tel:0931.943.439">
                  <Space>Hỗ trợ khách hàng: 0931.943.439</Space>
                </a>
                <a className="header_color_item" href="tel:0931.943.439">
                  <Space>Hỗ trợ nạp tiền: 0931.943.439</Space>
                </a>
                <a className="header_color_item" href="tel:0931.943.439">
                  <Space>Hỗ trợ giao nhận: 0931.943.439</Space>
                </a>
                <a className="header_color_item" href="tel:0931.943.439">
                  <Space>Hỗ trợ khiếu nại(huỷ đơn): 0931.943.439</Space>
                </a>
              </Flex>
            </Col>
            <Col xs={24} sm={8}>
              <Flex vertical>
                <Space className="footer_header">BẢNG GIÁ DỊCH VỤ</Space>
                <Flex vertical>
                  <Link className="header_color_item" to={'/bang-gia'}>
                    Bảng giá dịch vụ đặt hàng Trung Quốc
                  </Link>
                  <Link className="header_color_item" to={'/bang-gia-ky-gui-hang'}>
                    Bảng ký gửi vận chuyển
                  </Link>
                  <Link
                    className="header_color_item"
                    to={'/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung'}
                  >
                    Bảng giá dịch vụ chuyển tiền
                  </Link>
                </Flex>
              </Flex>
            </Col>
            <Col xs={24} sm={8}>
              <Flex vertical>
                <Space className="footer_header"> KẾT NỐI VỚI CHÚNG TÔI</Space>
                <Flex gap={10}>
                  <a href="">
                    <img
                      style={{ height: '40px', width: '40px' }}
                      src="https://res.cloudinary.com/drqphlfn6/image/upload/v1707809091/vrvzmcykp5acusyvrvoa.png"
                    />
                  </a>
                  <a href="">
                    <img
                      style={{ height: '40px', width: '40px' }}
                      src="https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg"
                    />
                  </a>
                  <Space></Space>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={20}>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            © 2024 Kieu Nghia Order. Tất cả các quyền được bảo lưu.
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
