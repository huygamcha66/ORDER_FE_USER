/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { Col, ConfigProvider, Flex, Image, Modal, Row, Space, Spin } from 'antd'
import { complainOrder, getDetailOrder } from '../../../../redux/orderSlice/orderSlice'
import TextArea from 'antd/es/input/TextArea'
import { openNotificationWithIcon } from '../../../../components/Nofitication'

const ProductItem = ({ cart, rateOrder }) => {
  return (
    <tbody>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '8px', width: '40%' }}>
          <div style={{ display: 'flex' }}>
            {cart.coverImageUrl.startsWith('https') ? (
              <img
                src={cart.coverImageUrl}
                alt="Sản phẩm"
                style={{
                  width: '50px',
                  marginRight: '10px',
                  height: '50px'
                }}
              />
            ) : (
              <video
                // className="hoverVideo"
                className="video_thumbnail"
                src={`https:${cart.coverImageUrl}`}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
                controls={false}
              >
                Trình duyệt không hỗ trợ ảnh
              </video>
            )}
            <a style={{ color: '#000' }} target="_blank" href={cart.productUrl}>
              {cart.name}
            </a>
          </div>
        </td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
          <Flex justify="center">{cart.quantity}</Flex>
        </td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
          <Flex justify="center">
            {parseInt((cart.price * 3625).toFixed(0)).toLocaleString('vi-VN')} đ
          </Flex>
        </td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
          <Flex justify="center">
            {rateOrder * 100} %
          </Flex>
        </td>
        <td
          style={{
            border: '1px solid #ddd',
            padding: '8px',
            fontWeight: 'bolder'
          }}
        >
          <Flex justify="center">
            {parseInt((cart.price * 3625 * cart.quantity * (1 + rateOrder)).toFixed(0)).toLocaleString(
              'vi-VN'
            )}
            đ
          </Flex>
        </td>
      </tr>
    </tbody>
  )
}

const DetailOrder = () => {
  const { detailOrder } = useSelector((state) => state.orders)
  const [complain, setComplain] = useState()
  const [loadingPlace, setLoadingPlace] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  console.log('««««« detailOrder »»»»»', detailOrder);
  useEffect(() => {
    dispatch(getDetailOrder(location.pathname.split('/')[3]))
  }, [location.pathname])

  useEffect(() => {
    setComplain(detailOrder && detailOrder.complainContent)
  }, [detailOrder])

  const handleSubmit = async () => {
    setLoadingPlace(true)
    try {
      await dispatch(
        complainOrder({
          orderId: detailOrder.id,
          content: complain,
        })
      ).unwrap()
      openNotificationWithIcon('success', 'Khiếu nại thành công')
    } catch (error) {
      openNotificationWithIcon('error', 'Khiếu nại thất bại')
    } finally {
      setTimeout(() => {
        // window.location.reload()
        setLoadingPlace(false)
      }, 2000)
    }
  }

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              hoverBorderColor: '#fb5731',
              activeBorderColor: '#fb5731'
            }
          }
        }}
      >
        <Row justify="center">
          <Col xs={20}>
            <div>
              <div>
                <h2>Giỏ hàng</h2>

                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '1em'
                  }}
                >
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sản phẩm</th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          width: '7%'
                        }}
                      >
                        Số lượng
                      </th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Đơn giá</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phí mua hàng</th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tổng tiền</th>
                    </tr>
                  </thead>
                  {detailOrder &&
                    detailOrder.productList &&
                    detailOrder.productList.map((cart, index) => (
                      <ProductItem rateOrder={detailOrder.rateOrder} key={index} cart={cart} index={index} />
                    ))}
                </table>
                <Flex style={{ marginBottom: '20px' }} vertical>
                  <Flex><Space style={{ width: '250px', marginBottom: '10px' }}>Đã cọc:</Space> {parseInt(detailOrder.deposit).toLocaleString()} VNĐ</Flex>
                  <Flex><Space style={{ width: '250px', marginBottom: '10px' }}>Phí vận chuyển nội địa Trung:</Space> {detailOrder.transportFeeTq ? `${parseInt(detailOrder.transportFeeTq).toLocaleString()} VNĐ ` : 'Đang cập nhật'} </Flex>
                  <Flex><Space style={{ width: '250px', marginBottom: '10px' }}>Phí vận chuyển về VN:</Space> {detailOrder.transportFee ? `${parseInt(detailOrder.transportFee).toLocaleString()} VNĐ ` : 'Đang cập nhật'} </Flex>
                  <Flex><Space style={{ width: '250px', marginBottom: '10px' }}>Tiền hàng:</Space> {parseInt(detailOrder.totalOrder + detailOrder.transportFeeTq).toLocaleString()} VNĐ</Flex>
                  <Flex><Space style={{ width: '250px', marginBottom: '10px' }}>Giảm giá:</Space> {parseInt(detailOrder.orderDiscount).toLocaleString()} VNĐ</Flex>
                  <Flex><Space style={{ width: '250px', marginBottom: '10px' }}>Đã thanh toán:</Space> {parseInt(detailOrder.paidFee).toLocaleString()} VNĐ</Flex>
                  <Flex><Space style={{ width: '250px' }}>Còn lại:</Space> {parseInt(detailOrder.remaining + detailOrder.transportFeeTq - detailOrder.orderDiscount).toLocaleString()} VNĐ</Flex>
                </Flex>

                <Flex>
                  {/* huyg */}
                  <TextArea
                    value={complain}
                    disabled={detailOrder && detailOrder.complainContent}
                    onChange={(e) => setComplain(e.target.value)}
                    placeholder="Nhập lí do khiếu nại"
                    autoSize={{
                      minRows: 3,
                      maxRows: 6
                    }}
                  />
                </Flex>
              </div>
            </div>
            <Flex justify="space-between" className="wrapper_buy_step_1">
              {loadingPlace ? (
                <Spin />
              ) : (
                <button disabled={detailOrder && detailOrder.complainContent} onClick={handleSubmit} className="btn_step_1">
                  <Space style={{ padding: '5px' }}>{detailOrder && detailOrder.complainContent ? 'Đang xử lí' : 'Khiếu nại'}</Space>
                </button>
              )}
            </Flex>
          </Col>
        </Row>
      </ConfigProvider>

    </>
  )
}

export default DetailOrder
