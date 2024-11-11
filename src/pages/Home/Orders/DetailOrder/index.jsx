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
import { STATUS_ORDER_MAP } from '../../../../utils/constants'
import { allHistoryUpdate } from '../../../../service/Order'
// STATUS_ORDER_MAP
const ProductItem = ({ order, cart, rateOrder, rateMoney, status }) => {
  // console.log(cart.productId)

  return (
    <tbody>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '8px', width: '40%' }}>
          <div style={{ display: 'flex' }}>
            {!cart.coverImageUrl.includes('video') ? (
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
                src={`${cart.coverImageUrl}`}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
                controls={false}
              >
                Trình duyệt không hỗ trợ ảnh
              </video>
            )}
            <Flex vertical gap={10}>
              <a style={{ color: '#000' }} target="_blank" href={cart.productUrl}>
                {cart.name}
              </a>
              <div>
                <div>
                  {cart.productMoreInfo &&
                    JSON.parse(cart.productMoreInfo).map((info, index) => (
                      <Space key={index}>{info}</Space>
                    ))}
                </div>
              </div>
            </Flex>
          </div>
        </td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
          <Flex justify="center">{cart.quantity}</Flex>
        </td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
          <Flex justify="center">
            {parseInt((cart.price * rateMoney).toFixed(0)).toLocaleString('vi-VN')} đ
          </Flex>
        </td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
          <Flex justify="center">{rateOrder * 100} %</Flex>
        </td>
        <td
          style={{
            border: '1px solid #ddd',
            padding: '8px',
            fontWeight: 'bolder'
          }}
        >
          <Flex justify="center">
            {parseInt(
              (cart.price * rateMoney * cart.quantity * (1 + rateOrder)).toFixed(0)
            ).toLocaleString('vi-VN')}
            đ
          </Flex>
        </td>
        <td
          style={{
            border: '1px solid #ddd',
            padding: '8px',
            fontWeight: 'bolder'
          }}
        >
          <Flex justify="center">{STATUS_ORDER_MAP[status]}</Flex>
        </td>
      </tr>
    </tbody>
  )
}

const DetailOrder = ({ cart }) => {
  const { detailOrder } = useSelector((state) => state.orders)
  const [complain, setComplain] = useState()
  const [loadingPlace, setLoadingPlace] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(getDetailOrder(location.pathname.split('/')[3]))
  }, [location.pathname])

  useEffect(() => {
    setComplain(detailOrder && detailOrder.complainContent)
  }, [detailOrder])

  // const handleSubmit = async () => {
  //   setLoadingPlace(true)
  //   try {
  //     if (!complain) {
  //       openNotificationWithIcon('error', 'Hãy nhập lí do khiếu nại')
  //     } else {
  //       await dispatch(
  //         complainOrder({
  //           orderId: detailOrder.id,
  //           content: complain
  //         })
  //       ).unwrap()
  //       openNotificationWithIcon('success', 'Khiếu nại thành công')
  //       setComplain('')
  //     }
  //   } catch (error) {
  //     openNotificationWithIcon('error', 'Khiếu nại thất bại')
  //   } finally {
  //     setTimeout(() => {
  //       // window.location.reload()
  //       setLoadingPlace(false)
  //     }, 2000)
  //   }
  // }

  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true) // Thêm state để kiểm soát loading

  const fetchHistory = async () => {
    try {
      setLoading(true) // Bắt đầu quá trình tải dữ liệu

      // Kiểm tra và lấy ra productList từ detailOrder
      const productList = detailOrder?.productList

      if (!productList || productList.length === 0) {
        setLoading(false)
        console.log('No products found in detailOrder')
        return
      }

      // Gọi API cho tất cả sản phẩm trong productList
      const apiCalls = productList.map((product) =>
        allHistoryUpdate({ productId: product.productId })
      )

      // Chờ tất cả các API trả về kết quả
      const data = await Promise.all(apiCalls)
      console.log('Fetched data:', data)

      // Nếu data trả về là mảng và có dữ liệu, cập nhật state history
      if (Array.isArray(data) && data.length > 0) {
        setHistory(data) // Cập nhật dữ liệu mới
      } else {
        setHistory([]) // Nếu không có dữ liệu, đặt mảng rỗng
      }
    } catch (error) {
      console.error('API call error:', error)
      setHistory([]) // Nếu có lỗi, đặt mảng rỗng
    } finally {
      setLoading(false) // Đã hoàn thành việc tải dữ liệu
    }
  }

  // useEffect gọi API khi detailOrder thay đổi
  useEffect(() => {
    if (detailOrder?.productList?.length > 0) {
      fetchHistory() // Gọi hàm fetchHistory khi detailOrder thay đổi
    } else {
      console.log('No products found in detailOrder')
    }
  }, [detailOrder])

  console.log('data showing: ', detailOrder.tempProductList)
  const tempHistory = detailOrder.tempProductList

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
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>Trạng thái</th>
                    </tr>
                  </thead>
                  {detailOrder &&
                    detailOrder.productList &&
                    detailOrder.productList.map((cart, index) => (
                      <ProductItem
                        rateMoney={detailOrder.rateMoney}
                        rateOrder={detailOrder.rateOrder}
                        status={detailOrder.status}
                        key={index}
                        cart={cart}
                        index={index}
                        order={detailOrder.tempProductList[index]}
                      />
                    ))}
                </table>
                <Flex style={{ marginBottom: '20px' }} vertical>
                  <Flex>
                    <Space style={{ width: '250px', marginBottom: '20px' }}>
                      Địa chỉ giao hàng:
                    </Space>{' '}
                    {detailOrder.deliveryAddress}{' '}
                  </Flex>
                  <Flex>
                    <Space style={{ width: '250px', marginBottom: '20px' }}>
                      Phí vận chuyển nội địa Trung:
                    </Space>{' '}
                    {detailOrder.transportFeeTq
                      ? `${parseInt(detailOrder.transportFeeTq).toLocaleString()} VNĐ `
                      : 'Đang cập nhật'}{' '}
                  </Flex>
                  <Flex>
                    <Space style={{ width: '250px', marginBottom: '20px' }}>
                      Phí vận chuyển về VN:
                    </Space>{' '}
                    {detailOrder.transportFee
                      ? `${parseInt(detailOrder.transportFee).toLocaleString()} VNĐ `
                      : 'Đang cập nhật'}{' '}
                  </Flex>
                  <Flex>
                    {detailOrder.boxFee ? (
                      <>
                        <Space style={{ width: '250px', marginBottom: '20px' }}>Phí đóng gỗ:</Space>{' '}
                        `${parseInt(detailOrder.boxFee).toLocaleString()} VNĐ `
                      </>
                    ) : (
                      <></>
                    )}
                  </Flex>
                  <Flex>
                    <Space style={{ width: '250px', marginBottom: '20px' }}>Tiền sản phẩm:</Space>{' '}
                    {parseInt(detailOrder.totalOrder).toLocaleString()} VNĐ
                  </Flex>
                  <Flex>
                    <Space style={{ width: '250px', marginBottom: '20px' }}>Tổng tiền hàng:</Space>{' '}
                    {parseInt(
                      detailOrder.totalOrder +
                        detailOrder.transportFeeTq +
                        detailOrder.transportFee +
                        detailOrder.boxFee
                    ).toLocaleString()}{' '}
                    VNĐ
                  </Flex>
                  <Flex>
                    <Space style={{ width: '250px', marginBottom: '20px' }}>Đã thanh toán:</Space>{' '}
                    {parseInt(detailOrder.paidFee).toLocaleString()} VNĐ
                  </Flex>
                  <Flex>
                    <Space style={{ width: '250px', marginBottom: '20px' }}>Giảm giá:</Space>{' '}
                    {parseInt(detailOrder.orderDiscount).toLocaleString()} VNĐ
                  </Flex>
                  <Flex>
                    <Space style={{ width: '250px' }}>Cần thanh toán:</Space>{' '}
                    {parseInt(
                      detailOrder.totalOrder +
                        detailOrder.transportFeeTq +
                        detailOrder.boxFee +
                        detailOrder.transportFee -
                        detailOrder.orderDiscount -
                        detailOrder.paidFee
                    ).toLocaleString()}{' '}
                    VNĐ
                  </Flex>
                </Flex>
              </div>
            </div>
            <h2>Số lượng đang chờ xác nhận thay đổi</h2>
            <div>
              {tempHistory === null ? (
                <p></p>
              ) : tempHistory && tempHistory.length > 0 ? (
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '1em'
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'center',
                          padding: '8px'
                        }}
                      >
                        #
                      </th>
                      <th
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'center',
                          padding: '8px'
                        }}
                      >
                        Tên sản phẩm
                      </th>
                      <th
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'center',
                          padding: '8px'
                        }}
                      >
                        Ngày cập nhật
                      </th>
                      <th
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'center',
                          padding: '8px'
                        }}
                      >
                        Số lượng chưa thay đổi
                      </th>
                      <th
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'center',
                          padding: '8px'
                        }}
                      >
                        Số lượng đã thay đổi
                      </th>
                      <th
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'center',
                          padding: '8px'
                        }}
                      >
                        Hoàn trả
                      </th>
                      <th
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'center',
                          padding: '8px'
                        }}
                      >
                        Cọc thêm
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr
                        style={{
                          border: '1px solid #dddddd',
                          textAlign: 'left',
                          padding: '8px'
                        }}
                      >
                        <td colSpan="3">Loading...</td>
                      </tr>
                    ) : tempHistory.length === 0 ? (
                      <p>Không có</p> // Hiển thị khi không có dữ liệu
                    ) : (
                      tempHistory.flat().map((item, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <Flex justify="center">{index + 1}</Flex>
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <Flex justify="center">{item.name ? item.name : 'No name'}</Flex>
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <Flex justify="center">
                              {item.createdDate
                                ? new Date(item.createdDate).toLocaleString()
                                : 'No date'}
                            </Flex>
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <Flex justify="center">
                              {item.oldQuantity !== undefined ? item.oldQuantity : 'No oldQuantity'}
                            </Flex>
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <Flex justify="center">
                              {item.quantity !== undefined ? item.quantity : 'No newQuantity'}
                            </Flex>
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <Flex justify="center">
                              {item.refund > 0 ? `${item.refund.toLocaleString()} đ` : ''}
                            </Flex>
                          </td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <Flex justify="center">
                              {item.refund < 0 ? `${Math.abs(item.refund).toLocaleString()} đ` : ''}
                            </Flex>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              ) : (
                <p>Không có số lượng nào chờ xác nhận thay đổi</p>
              )}
            </div>
            <div style={{ marginBottom: '30px' }}>
              <h2>Lịch sử thay đổi số lượng sản phẩm</h2>
              <div style={{ marginBottom: '30px' }}>
                {history === null ? (
                  <p>Loading...</p>
                ) : history.length > 0 ? (
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      marginBottom: '1em'
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            border: '1px solid #dddddd',
                            textAlign: 'center',
                            padding: '8px'
                          }}
                        >
                          #
                        </th>
                        <th
                          style={{
                            border: '1px solid #dddddd',
                            textAlign: 'center',
                            padding: '8px'
                          }}
                        >
                          Tên sản phẩm
                        </th>
                        <th
                          style={{
                            border: '1px solid #dddddd',
                            textAlign: 'center',
                            padding: '8px'
                          }}
                        >
                          Ngày cập nhật
                        </th>
                        <th
                          style={{
                            border: '1px solid #dddddd',
                            textAlign: 'center',
                            padding: '8px'
                          }}
                        >
                          Số lượng chưa thay đổi
                        </th>
                        <th
                          style={{
                            border: '1px solid #dddddd',
                            textAlign: 'center',
                            padding: '8px'
                          }}
                        >
                          Số lượng đã thay đổi
                        </th>
                        <th
                          style={{
                            border: '1px solid #dddddd',
                            textAlign: 'center',
                            padding: '8px'
                          }}
                        >
                          Hoàn trả
                        </th>
                        <th
                          style={{
                            border: '1px solid #dddddd',
                            textAlign: 'center',
                            padding: '8px'
                          }}
                        >
                          Cọc thêm
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="3">Loading...</td>
                        </tr>
                      ) : history.length === 0 ? (
                        <p>No data available</p> // Hiển thị khi không có dữ liệu
                      ) : (
                        history.flat().map((item, index) => (
                          <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                              <Flex justify="center">{index + 1}</Flex>
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                              <Flex justify="center">{item.name ? item.name : 'No name'}</Flex>
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                              <Flex justify="center">
                                {item.createdDate
                                  ? new Date(item.createdDate).toLocaleString()
                                  : 'No date'}
                              </Flex>
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                              <Flex justify="center">
                                {item.oldQuantity !== undefined
                                  ? item.oldQuantity
                                  : 'No oldQuantity'}
                              </Flex>
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                              <Flex justify="center">
                                {item.newQuantity !== undefined
                                  ? item.newQuantity
                                  : 'No newQuantity'}
                              </Flex>
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                              <Flex justify="center">
                                {item.refund > 0 ? `${item.refund.toLocaleString()} đ` : ''}
                              </Flex>
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                              <Flex justify="center">
                                {item.refund < 0
                                  ? `${Math.abs(item.refund).toLocaleString()} đ`
                                  : ''}
                              </Flex>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                ) : (
                  <p>Không có lịch sử thay đổi số lượng sản phẩm</p>
                )}
              </div>
            </div>
            {/* 
            <Flex justify="space-between" className="wrapper_buy_step_1">
              {loadingPlace ? (
                <Spin />
              ) : (
                <button
                  disabled={detailOrder && detailOrder.complainContent}
                  onClick={handleSubmit}
                  className="btn_step_1"
                >
                  <Space style={{ padding: '5px' }}>
                    {detailOrder.status === 9
                      ? 'Đã xử lí'
                      : detailOrder && detailOrder.complainContent
                        ? 'Đang xử lí'
                        : 'Khiếu nại'}
                  </Space>
                </button>
              )}
            </Flex> */}
          </Col>
        </Row>
      </ConfigProvider>
    </>
  )
}

export default DetailOrder
