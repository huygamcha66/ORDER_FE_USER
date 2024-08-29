/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  deleteProductFromCart,
  getCartDetail,
  updateProductFromCart
} from '../../../redux/cartSlice/cartSlice'
import { jwtDecode } from 'jwt-decode'
import { createOrder } from '../../../redux/orderSlice/orderSlice'
import { MdOutlineDelete } from 'react-icons/md'
import { Col, Flex, Image, Modal, Row, Space, Input, ConfigProvider, Spin, Empty } from 'antd'
const { TextArea } = Input
import './Cart.css'
import { openNotificationWithIcon } from '../../../components/Nofitication'
import useDecodedToken from '../../../components/UserInfor'
import axios from 'axios'
import { API_ROOT } from '../../../utils/constants'
import { detailMe, preBuy, resetState } from '../../../redux/userSlice/userSlice'
import { addressIP, getCanvasFingerprint, getWebGLFingerprint } from '../../../common/InforUser'

const ProductItem = ({ cart, onDelete, rate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useSelector((state) => state.users)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleConfirmDelete = () => {
    onDelete(cart)
    setIsModalOpen(false)
    openNotificationWithIcon('success', 'Xoá sản phẩm thành công')
  }
  return (
    <>
      {user && user.user && (
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', width: '40%' }}>
              <div style={{ display: 'flex' }}>
                {!cart.coverImageUrl.includes('video') ? (
                  <img
                    src={`https:${cart.coverImageUrl}`}
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
                <Flex vertical gap={10}>
                  <a style={{ color: '#000' }} target="_blank" href={cart.productUrl}>
                    {cart.name}
                  </a>
                  <div>
                    {cart.productMoreInfo &&
                      JSON.parse(cart.productMoreInfo).map((info, index) => (
                        <Space key={index}>{info}</Space>
                      ))}
                  </div>
                </Flex>
              </div>
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Flex justify="center">{cart.quantity}</Flex>
            </td>

            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Flex justify="center">
                {parseInt((cart.price * rate * (1 + user.user.rate)).toFixed(0)).toLocaleString(
                  'vi-VN'
                )}{' '}
                đ
              </Flex>
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Flex justify="center">{rate.toLocaleString()}</Flex>
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
                  (cart.price * rate * (1 + user.user.rate) * cart.quantity).toFixed(0)
                ).toLocaleString('vi-VN')}{' '}
                đ
              </Flex>
            </td>

            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Flex justify="center">
                <button
                  onClick={showModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer'
                  }}
                >
                  <MdOutlineDelete style={{ width: '20px', height: '20px' }} />
                </button>
                <Modal
                  title="Bạn muốn xoá sản phẩm này chứ?"
                  open={isModalOpen}
                  onOk={handleConfirmDelete}
                  onCancel={handleCancel}
                  cancelButtonProps={{
                    style: {
                      backgroundColor: '#f5222d',
                      borderColor: '#f5222d',
                      color: '#fff'
                    }
                  }}
                  okButtonProps={{
                    style: {
                      backgroundColor: '#ccc',
                      color: '#000'
                    }
                  }}
                  okText="Có"
                  cancelText="Không"
                ></Modal>
              </Flex>
            </td>
          </tr>
        </tbody>
      )}
    </>
  )
}

const CartStep2 = () => {
  const { carts, success } = useSelector((state) => state.carts)
  const { user, isPreBuy } = useSelector((state) => state.users)
  const [totalCheckedDeposit, setTotalCheckedDeposit] = useState(0)
  const { decodedToken } = useDecodedToken('token')
  const [addressDelivery, setAddressDelivery] = useState()
  const [loadingPlace, setLoadingPlace] = useState(false)
  const [rate, setRate] = useState()
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const payload = await axios.get(`${API_ROOT}/api/v1.0/rates/getCurrentRate`)
        setRate(payload.data && payload.data.payload[0].value)
      } catch (error) {
        console.log('««««« error »»»»»', error)
      }
    }
    fetchRate()
  }, [])

  const dispatch = useDispatch()
  useEffect(() => {
    // Version Old(thiểu return về acc khi không được chọn)
    // const totalDeposit =
    //   carts &&
    //   carts.products &&
    //   carts.products.reduce((acc, value) => {
    //     console.log("««««« value »»»»»", value);
    //     if (value.check) return acc + value.price * rate * value.quantity * 0.7;
    //   }, 0);
    // improve: đọc comt
    if (user?.user && rate) {
      const totalDeposit = carts?.products?.reduce((acc, value) => {
        if (value.check) {
          // Tính tiền đặt cọc cho sản phẩm nếu đã chọn
          return acc + value.price * rate * value.quantity * 0.7 * (1 + user.user.rate)
        }
        // Nếu sản phẩm không được chọn, trả lại giá trị hiện tại của acc
        return acc
      }, 0)
      setTotalCheckedDeposit(totalDeposit)
    }
  }, [carts, success, user, rate])

  const handleSubmit = async () => {
    await dispatch(
      preBuy({
        addressIP: `${addressIP}&&${getCanvasFingerprint()}&&${getWebGLFingerprint().renderer}`
      })
    ).unwrap()
  }

  useEffect(() => {
    if (isPreBuy) {
      const finalBuy = async () => {
        if (
          !user.user.accountBalance ||
          (user?.user?.accountBalance &&
            parseInt(user.user.accountBalance.toFixed(0)) <
              parseInt(totalCheckedDeposit.toFixed(0)))
        ) {
          return setIsModalOpen(true)
        }
        setLoadingPlace(true)
        const finalProduct = carts.products
          .filter((product) => product.check)
          .map((product) => ({
            ...product,
            properties: ''
          }))

        try {
          await dispatch(
            createOrder({
              userId: decodedToken.id,
              productList: finalProduct,
              purchaseFee: totalCheckedDeposit.toFixed(0),
              deliveryAddress: addressDelivery ? addressDelivery : user.user.address,
              rateMoney: rate
            })
          ).unwrap()
          openNotificationWithIcon('success', 'Đặt hàng thành công')
        } catch (error) {
          openNotificationWithIcon('error', 'Đặt hàng thất bại')
        } finally {
          setTimeout(() => {
            window.location.reload()
            setLoadingPlace(false)
          }, 2000)
        }
      }
      finalBuy()
    }
    resetState()
  }, [isPreBuy])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleDelete = async (data) => {
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        await dispatch(
          updateProductFromCart({
            userId: decodedToken.id,
            newQuantity: data.quantity,
            check: false,
            productId: data.productId
          })
        ).unwrap()
        // Đợi tất cả các promises hoàn thành
      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error)
      }
    }
    await updateCartProducts()
    // setIsModalOpen(false)
  }
  return (
    <>
      {totalCheckedDeposit ? (
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
          {' '}
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
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tỉ giá</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tổng tiền</th>
                        <th
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px'
                          }}
                        >
                          Xoá
                        </th>
                      </tr>
                    </thead>
                    {carts.products &&
                      carts.products.map((cart, index) => {
                        if (cart.check) {
                          return (
                            <ProductItem
                              rate={rate}
                              onDelete={handleDelete}
                              key={index}
                              cart={cart}
                              index={index}
                            />
                          )
                        }
                      })}
                  </table>
                  <Flex>
                    {/* huyg */}
                    <TextArea
                      value={addressDelivery}
                      onChange={(e) => setAddressDelivery(e.target.value)}
                      placeholder="Nhập địa chỉ nhận hàng"
                      autoSize={{
                        minRows: 3,
                        maxRows: 6
                      }}
                    />
                  </Flex>
                </div>
              </div>
              {carts.products && carts.products.length > 0 && (
                <Flex justify="space-between" className="wrapper_buy_step_1">
                  <Space>
                    <Space> Tổng tiền cọc (70%):</Space>
                    <span style={{ color: 'red' }}>
                      {totalCheckedDeposit &&
                        parseInt(totalCheckedDeposit.toFixed(0)).toLocaleString('vi-VN')}
                      đ
                    </span>
                  </Space>
                  {loadingPlace ? (
                    <Spin />
                  ) : (
                    <button onClick={handleSubmit} className="btn_step_1">
                      <Space style={{ padding: '5px' }}> Gửi đơn</Space>
                    </button>
                  )}

                  <Modal
                    title="Bạn không đủ tiền để mua, hãy liên hệ với chúng tôi để nạp tiền vào ví!"
                    open={isModalOpen}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    cancelButtonProps={{
                      style: {
                        backgroundColor: '#f5222d',
                        borderColor: '#f5222d',
                        color: '#fff'
                      }
                    }}
                    okButtonProps={{
                      style: {
                        backgroundColor: '#ccc',
                        color: '#000'
                      }
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
              )}
            </Col>
          </Row>
        </ConfigProvider>
      ) : (
        <Empty style={{ marginTop: '30px' }} description={<span>Không có sản phẩm nào</span>} />
      )}
    </>
  )
}

export default CartStep2
