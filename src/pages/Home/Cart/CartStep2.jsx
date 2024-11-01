// /* eslint-disable react/jsx-no-target-blank */
// /* eslint-disable quotes */
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router-dom'
// import {
//   deleteProductFromCart,
//   getCartDetail,
//   updateProductFromCart
// } from '../../../redux/cartSlice/cartSlice'
// import { jwtDecode } from 'jwt-decode'
// import { createOrder } from '../../../redux/orderSlice/orderSlice'
// import { MdOutlineDelete } from 'react-icons/md'
// import {
//   Col,
//   Flex,
//   Image,
//   Modal,
//   Row,
//   Space,
//   Input,
//   ConfigProvider,
//   Spin,
//   Empty,
//   Form,
//   Button,
//   Alert
// } from 'antd'
// const { TextArea } = Input
// import './Cart.css'
// import { openNotificationWithIcon } from '../../../components/Nofitication'
// import useDecodedToken from '../../../components/UserInfor'
// import axios from 'axios'
// import { API_ROOT } from '../../../utils/constants'
// import { detailMe, preBuy, resetState } from '../../../redux/userSlice/userSlice'
// import { addressIP, getCanvasFingerprint, getWebGLFingerprint } from '../../../common/InforUser'

// const ProductItem = ({ cart, onDelete, rate }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const { user } = useSelector((state) => state.users)

//   const showModal = () => {
//     setIsModalOpen(true)
//   }

//   const handleCancel = () => {
//     setIsModalOpen(false)
//   }
//   const handleConfirmDelete = () => {
//     onDelete(cart)
//     setIsModalOpen(false)
//     openNotificationWithIcon('success', 'Xoá sản phẩm thành công')
//   }
//   return (
//     <>
//       {user && user.user && (
//         <tbody>
//           <tr>
//             <td style={{ border: '1px solid #ddd', padding: '8px', width: '40%' }}>
//               <div style={{ display: 'flex' }}>
//                 {!cart.coverImageUrl.includes('video') ? (
//                   <img
//                     src={
//                       cart.coverImageUrl.startsWith('https:')
//                         ? cart.coverImageUrl
//                         : `https:${cart.coverImageUrl}`
//                     }
//                     alt="Sản phẩm"
//                     style={{
//                       width: '50px',
//                       marginRight: '10px',
//                       height: '50px'
//                     }}
//                   />
//                 ) : (
//                   <video
//                     // className="hoverVideo"
//                     className="video_thumbnail"
//                     src={
//                       cart.coverImageUrl.startsWith('https:')
//                         ? cart.coverImageUrl
//                         : `https:${cart.coverImageUrl}`
//                     }
//                     style={{ width: '50px', height: '50px', marginRight: '10px' }}
//                     controls={false}
//                   >
//                     Trình duyệt không hỗ trợ ảnh
//                   </video>
//                 )}
//                 <Flex vertical gap={10}>
//                   <a style={{ color: '#000' }} target="_blank" href={cart.productUrl}>
//                     {cart.name}
//                   </a>
//                   <div>
//                     {cart.productMoreInfo &&
//                       JSON.parse(cart.productMoreInfo).map((info, index) => (
//                         <Space key={index}>{info} </Space>
//                       ))}
//                   </div>
//                 </Flex>
//               </div>
//             </td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//               <Flex justify="center">{cart.quantity}</Flex>
//             </td>

//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//               <Flex justify="center">
//                 {parseInt((cart.price * rate * (1 + user.user.rate)).toFixed(0)).toLocaleString(
//                   'vi-VN'
//                 )}{' '}
//                 đ
//               </Flex>
//             </td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//               <Flex justify="center">{rate.toLocaleString()}</Flex>
//             </td>
//             <td
//               style={{
//                 border: '1px solid #ddd',
//                 padding: '8px',
//                 fontWeight: 'bolder'
//               }}
//             >
//               <Flex justify="center">
//                 {parseInt(
//                   (cart.price * rate * (1 + user.user.rate) * cart.quantity).toFixed(0)
//                 ).toLocaleString('vi-VN')}{' '}
//                 đ
//               </Flex>
//             </td>

//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//               <Flex justify="center">
//                 <button
//                   onClick={showModal}
//                   style={{
//                     background: 'none',
//                     border: 'none',
//                     color: 'red',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   <MdOutlineDelete style={{ width: '20px', height: '20px' }} />
//                 </button>
//                 <Modal
//                   title="Bạn muốn xoá sản phẩm này chứ?"
//                   open={isModalOpen}
//                   onOk={handleConfirmDelete}
//                   onCancel={handleCancel}
//                   cancelButtonProps={{
//                     style: {
//                       backgroundColor: '#f5222d',
//                       borderColor: '#f5222d',
//                       color: '#fff'
//                     }
//                   }}
//                   okButtonProps={{
//                     style: {
//                       backgroundColor: '#ccc',
//                       color: '#000'
//                     }
//                   }}
//                   okText="Có"
//                   cancelText="Không"
//                 ></Modal>
//               </Flex>
//             </td>
//           </tr>
//         </tbody>
//       )}
//     </>
//   )
// }

// const CartStep2 = () => {
//   const { carts, success } = useSelector((state) => state.carts)
//   const { user, isPreBuy } = useSelector((state) => state.users)
//   const [totalCheckedDeposit, setTotalCheckedDeposit] = useState(0)
//   const { decodedToken } = useDecodedToken('token')
//   const [addressDelivery, setAddressDelivery] = useState()
//   const [loadingPlace, setLoadingPlace] = useState(false)
//   const [rate, setRate] = useState()
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     const fetchRate = async () => {
//       try {
//         const payload = await axios.get(`${API_ROOT}/api/v1.0/rates/getCurrentRate`)
//         setRate(payload.data && payload.data.payload[0].value)
//       } catch (error) {
//         console.log('««««« error »»»»»', error)
//       }
//     }
//     fetchRate()
//   }, [])

//   const dispatch = useDispatch()
//   useEffect(() => {
//     // Version Old(thiểu return về acc khi không được chọn)
//     // const totalDeposit =
//     //   carts &&
//     //   carts.products &&
//     //   carts.products.reduce((acc, value) => {
//     //     console.log("««««« value »»»»»", value);
//     //     if (value.check) return acc + value.price * rate * value.quantity * 0.7;
//     //   }, 0);
//     // improve: đọc comt
//     if (user?.user && rate) {
//       const totalDeposit = carts?.products?.reduce((acc, value) => {
//         if (value.check) {
//           // Tính tiền đặt cọc cho sản phẩm nếu đã chọn
//           return acc + value.price * rate * value.quantity * 0.7 * (1 + user.user.rate)
//         }
//         // Nếu sản phẩm không được chọn, trả lại giá trị hiện tại của acc
//         return acc
//       }, 0)
//       setTotalCheckedDeposit(totalDeposit)
//     }
//   }, [carts, success, user, rate])

//   const handleSubmit = async () => {
//     if (!addressDelivery) {
//       setError(true)
//     } else {
//       setError(false)

//       await dispatch(
//         preBuy({
//           addressIP: `${addressIP}&&${getCanvasFingerprint()}&&${getWebGLFingerprint().renderer}`
//         })
//       ).unwrap()
//     }
//   }

//   useEffect(() => {
//     if (isPreBuy) {
//       const finalBuy = async () => {
//         if (
//           !user.user.accountBalance ||
//           (user?.user?.accountBalance &&
//             parseInt(user.user.accountBalance.toFixed(0)) <
//               parseInt(totalCheckedDeposit.toFixed(0)))
//         ) {
//           return setIsModalOpen(true)
//         }
//         setLoadingPlace(true)
//         const finalProduct = carts.products
//           .filter((product) => product.check)
//           .map((product) => ({
//             ...product
//           }))

//         try {
//           await dispatch(
//             createOrder({
//               userId: decodedToken.id,
//               productList: finalProduct,
//               purchaseFee: totalCheckedDeposit.toFixed(0),
//               deliveryAddress: addressDelivery ? addressDelivery : user.user.address,
//               rateMoney: rate
//             })
//           ).unwrap()
//           openNotificationWithIcon('success', 'Đặt hàng thành công')
//         } catch (error) {
//           openNotificationWithIcon('error', 'Đặt hàng thất bại')
//         } finally {
//           setTimeout(() => {
//             window.location.reload()
//             setLoadingPlace(false)
//           }, 2000)
//         }
//       }
//       finalBuy()
//     }
//     resetState()
//   }, [isPreBuy])
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const handleCancel = () => {
//     setIsModalOpen(false)
//   }

//   const handleDelete = async (data) => {
//     const updateCartProducts = async () => {
//       try {
//         // Tạo một mảng các promises từ map
//         await dispatch(
//           updateProductFromCart({
//             userId: decodedToken.id,
//             newQuantity: data.quantity,
//             check: false,
//             productId: data.productId
//           })
//         ).unwrap()
//         // Đợi tất cả các promises hoàn thành
//       } catch (error) {
//         // Xử lý lỗi nếu có
//         console.log('««««« error »»»»»', error)
//       }
//     }
//     await updateCartProducts()
//     // setIsModalOpen(false)
//   }
//   return (
//     <>
//       {totalCheckedDeposit ? (
//         <ConfigProvider
//           theme={{
//             components: {
//               Input: {
//                 hoverBorderColor: '#fb5731',
//                 activeBorderColor: '#fb5731'
//               }
//             }
//           }}
//         >
//           {' '}
//           <Row justify="center">
//             <Col xs={20}>
//               <div>
//                 <div>
//                   <h2>Giỏ hàng</h2>

//                   <table
//                     style={{
//                       width: '100%',
//                       borderCollapse: 'collapse',
//                       marginBottom: '1em'
//                     }}
//                   >
//                     <thead>
//                       <tr>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sản phẩm</th>
//                         <th
//                           style={{
//                             border: '1px solid #ddd',
//                             padding: '8px',
//                             width: '7%'
//                           }}
//                         >
//                           Số lượng
//                         </th>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Đơn giá</th>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tỉ giá</th>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tổng tiền</th>
//                         <th
//                           style={{
//                             border: '1px solid #ddd',
//                             padding: '8px'
//                           }}
//                         >
//                           Xoá
//                         </th>
//                       </tr>
//                     </thead>
//                     {carts.products &&
//                       carts.products.map((cart, index) => {
//                         if (cart.check) {
//                           return (
//                             <ProductItem
//                               rate={rate}
//                               onDelete={handleDelete}
//                               key={index}
//                               cart={cart}
//                               index={index}
//                             />
//                           )
//                         }
//                       })}
//                   </table>
//                   <Flex>
//                     {/* huyg */}
//                     <TextArea
//                       value={addressDelivery}
//                       onChange={(e) => {
//                         setError(false)
//                         setAddressDelivery(e.target.value)
//                       }}
//                       placeholder="Nhập địa chỉ nhận hàng"
//                       autoSize={{
//                         minRows: 3,
//                         maxRows: 6
//                       }}
//                     />
//                   </Flex>
//                   {error && <Alert message="Nhập địa chỉ nhận hàng" type="error" showIcon />}
//                   {/* <Form
//                     name="basic"
//                     initialValues={{
//                       remember: true
//                     }}
//                     onFinish
//                     // onFinishFailed={onFinishFailed}
//                     autoComplete="off"
//                   >
//                     <Form.Item
//                       label="Username"
//                       name="username"
//                       rules={[
//                         {
//                           required: true,
//                           message: 'Vui lòng nhập nội khiếu nại!'
//                         }
//                       ]}
//                     >
//                       <TextArea
//                         value={addressDelivery}
//                         onChange={(e) => setAddressDelivery(e.target.value)}
//                         placeholder="Nhập địa chỉ nhận hàng"
//                         autoSize={{
//                           minRows: 3,
//                           maxRows: 6
//                         }}
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       wrapperCol={{
//                         offset: 8,
//                         span: 16
//                       }}
//                     >
//                       <Button type="primary" htmlType="submit">
//                         Submit
//                       </Button>
//                     </Form.Item>
//                   </Form> */}
//                 </div>
//               </div>
//               {carts.products && carts.products.length > 0 && (
//                 <Flex justify="space-between" className="wrapper_buy_step_1">
//                   <Space>
//                     <Space> Tổng tiền cọc (70%):</Space>
//                     <span style={{ color: 'red' }}>
//                       {totalCheckedDeposit &&
//                         parseInt(totalCheckedDeposit.toFixed(0)).toLocaleString('vi-VN')}
//                       đ
//                     </span>
//                   </Space>
//                   {loadingPlace ? (
//                     <Spin />
//                   ) : (
//                     <button onClick={handleSubmit} className="btn_step_1">
//                       <Space style={{ padding: '5px' }}> Gửi đơn</Space>
//                     </button>
//                   )}

//                   <Modal
//                     title="Bạn không đủ tiền để mua, hãy liên hệ với chúng tôi để nạp tiền vào ví!"
//                     open={isModalOpen}
//                     onOk={handleCancel}
//                     onCancel={handleCancel}
//                     cancelButtonProps={{
//                       style: {
//                         backgroundColor: '#f5222d',
//                         borderColor: '#f5222d',
//                         color: '#fff'
//                       }
//                     }}
//                     okButtonProps={{
//                       style: {
//                         backgroundColor: '#ccc',
//                         color: '#000'
//                       }
//                     }}
//                     okText="Có"
//                     cancelText="Không"
//                     footer={null}
//                   >
//                     <Flex justify="center">
//                       Nội dung chuyển khoản: {decodedToken.email}
//                       {/* <Image
//                         width={350}
//                         src="https://pub-50bb58cfabdd4b93abb4e154d0eada9e.r2.dev/zalo.jpg"
//                       /> */}
//                     </Flex>
//                   </Modal>
//                 </Flex>
//               )}
//             </Col>
//           </Row>
//         </ConfigProvider>
//       ) : (
//         <Empty style={{ marginTop: '30px' }} description={<span>Không có sản phẩm nào</span>} />
//       )}
//     </>
//   )
// }

// export default CartStep2

/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { memo, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  deleteProductFromCart,
  getCartDetail,
  resetState,
  updateProductFromCart
} from '../../../redux/cartSlice/cartSlice'
import { jwtDecode } from 'jwt-decode'
import './Cart.css'
import {
  Alert,
  Button,
  Checkbox,
  Col,
  Empty,
  Flex,
  Image,
  Input,
  Modal,
  notification,
  Row,
  Space,
  Spin
} from 'antd'
import useDecodedToken from '../../../components/UserInfor'
import { MdOutlineDelete } from 'react-icons/md'
import { openNotificationWithIcon } from '../../../components/Nofitication'
import { API_ROOT } from '../../../utils/constants'
import axios from 'axios'
import { feeService, totalPriceOrder } from '../../../utils'
import ClusterProductCart2 from './Cart2/ClusterProductCart2'
import TextArea from 'antd/es/input/TextArea'
import { addNewOrderService } from '../../../service/Order'
import { removeProductFromCart } from '../../../service/Cart'

const CartStep2 = () => {
  const { carts } = useSelector((state) => state.carts)
  const { decodedToken } = useDecodedToken('token')
  const dispatch = useDispatch()
  const [allCheck, setAllCheck] = useState(false)
  const [totalCheckedPrice, setTotalCheckedPrice] = useState(0)
  const [checkedStates, setCheckedStates] = useState([])
  const [quantities, setQuantities] = useState([])
  const { user } = useSelector((state) => state.users)
  const [rate, setRate] = useState()

  const navigate = useNavigate()
  // load button khi submit
  const [loadingPlace, setLoadingPlace] = useState(false)

  // dsach tổng, phí dịch vụ của từng cluster
  const [priceCluster, setPriceCluster] = useState([])

  // hàm tình tổng của các cluster
  const handleCalculatorPriceCluster = (index, item, clusterId) => {
    const totalAmount = item.reduce((acc, product) => {
      if (product.check) {
        return acc + product.price * product.quantity
      }
      return acc
    }, 0)

    const newCluster = {
      index: index,
      totalPrice: totalAmount,
      // lưu theo giá trung, tính phí dịch vụ theo giá việt
      feeService: feeService(totalAmount * rate),
      clusterId: clusterId
    }

    // nếu chạy đồng thời thì phải dùng callback để update liên tục
    //https://chatgpt.com/c/671f24c0-5750-800a-8916-d695d98731d8 nick (vy)
    setPriceCluster((prevPriceCluster) => {
      // Tìm xem cluster đã tồn tại hay chưa
      const hasCluster = prevPriceCluster.findIndex((cluster) => cluster.index === index)
      let updatedPriceCluster

      if (hasCluster !== -1) {
        // Cập nhật cluster hiện có
        updatedPriceCluster = [...prevPriceCluster]
        updatedPriceCluster[hasCluster] = newCluster
      } else {
        // Thêm cluster mới
        updatedPriceCluster = [...prevPriceCluster, newCluster]
      }

      return updatedPriceCluster
    })
  }

  // tính tổng giá tiền trước khi mua hàng (kiểm tra với ví tiền)
  const totalPriceDeposit = useMemo(() => {
    const total = priceCluster.reduce((acc, cluster) => {
      const clusterTotal =
        cluster.totalPrice * rate + (cluster.totalPrice * rate * cluster.feeService) / 100
      return acc + clusterTotal
    }, 0)

    // Nhân kết quả cuối cùng với 70%
    return total
  }, [priceCluster])

  // địa chỉ giao hàng
  const [addressDelivery, setAddressDelivery] = useState()
  const [error, setError] = useState(false)

  // tỉ giá việt - trung
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

  const handlePlaceOrder = async () => {
    if (!addressDelivery) {
      return setError(true)
    } else {
      if (
        !user.user.accountBalance ||
        (user.user.accountBalance &&
          parseInt(user.user.accountBalance.toFixed(0)) > parseInt(totalPriceDeposit.toFixed(0)))
      ) {
        // Lọc và gọi API cho mỗi cluster có sản phẩm được chọn
        const clustersWithSelectedProducts = carts.productClusters.filter((cluster) =>
          cluster.products.some((product) => product.check)
        ) // Lọc clusters có ít nhất một sản phẩm check = true
        setLoadingPlace(true)

        for (const [index, item] of clustersWithSelectedProducts.entries()) {
          let ids = item.products
            .filter((product) => product.check)
            .map((product) => product.productId) // Lấy các product ID có check là true

          const selectedProducts = item.products.filter((product) => product.check === true)
          const clusterId = priceCluster[index].clusterId
          const purchaseFee = totalPriceOrder(priceCluster[index].totalPrice, rate)
          const totalPriceBeforeFeeService = priceCluster[index].totalPrice

          // Gọi hàm removeProductFromCart trước
          try {
            console.log(`Đã xóa sản phẩm khỏi giỏ hàng cho clusterId: ${clusterId}`, ids)

            // Sau khi xóa sản phẩm, gọi addNewOrderService
            // const response = await addNewOrderService({
            //   clusterId,
            //   productList: selectedProducts,
            //   purchaseFee,
            //   userId: user.user?._id,
            //   deliveryAddress: addressDelivery,
            //   rateOrder: rate,
            //   totalPriceBeforeFeeService,
            //   check: item.check // Đóng gỗ
            // })

            await removeProductFromCart({
              userId: user.user?._id,
              productClusterId: clusterId,
              ids
            })

            openNotificationWithIcon('success', 'Đặt hàng thành công')
          } catch (error) {
            console.error('Lỗi khi gọi API:', error)
          } finally {
            setTimeout(() => {
              window.location.reload()
              setLoadingPlace(false)
            }, 2000)
          }
        }
      } else {
        console.log('Số dư tài khoản không đủ để thực hiện đặt hàng')
      }
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div>
            <h2>Giỏ hàng</h2>
            {carts && carts.productClusters ? (
              <>
                {/* lọc qua những cluster mua ít nhấp 1 sản phẩm */}
                {carts.productClusters
                  .filter((cluster) => cluster.products.some((product) => product.check))
                  .map((item, index) => (
                    <div style={{ marginBottom: '1rem' }} key={index}>
                      <ClusterProductCart2
                        rate={rate}
                        priceCluster={priceCluster}
                        setPriceCluster={handleCalculatorPriceCluster}
                        userId={user.user?._id}
                        item={item}
                        index={index}
                      />
                    </div>
                  ))}
              </>
            ) : (
              <Empty
                style={{ marginTop: '30px' }}
                description={<span>Không có sản phẩm nào</span>}
              />
            )}
          </div>
        </Col>
        <Col xs={20}>
          <Flex>
            <TextArea
              value={addressDelivery}
              onChange={(e) => {
                setError(false)
                setAddressDelivery(e.target.value)
              }}
              placeholder="Nhập địa chỉ nhận hàng"
              autoSize={{
                minRows: 3,
                maxRows: 6
              }}
            />
          </Flex>
          {error && <Alert message="Nhập địa chỉ nhận hàng" type="error" showIcon />}
          <Space
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              marginTop: '1rem',
              alignItems: 'center'
            }}
          >
            <Space
              style={{
                fontSize: '18px',
                color: 'red',
                fontWeight: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
              }}
            >
              <Space>
                Tổng tiền: {Number(+totalPriceDeposit.toFixed(0)).toLocaleString('vi-VN')} VNĐ
              </Space>
              <Space>
                Tiền cọc (70%):{' '}
                {Number((+totalPriceDeposit * 0.7).toFixed(0)).toLocaleString('vi-VN')} VNĐ
              </Space>
            </Space>
            {loadingPlace ? (
              <Spin />
            ) : (
              <Button type="primary" onClick={handlePlaceOrder}>
                Thanh toán
              </Button>
            )}
          </Space>
        </Col>
        <Modal
          title="Bạn không đủ tiền để mua, hãy liên hệ với chúng tôi để nạp tiền vào ví!"
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
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
          <Flex align="center" vertical>
            Nội dung chuyển khoản: {decodedToken?.email}
            <Image width={350} src="https://pub-50bb58cfabdd4b93abb4e154d0eada9e.r2.dev/zalo.jpg" />
          </Flex>
        </Modal>
      </Row>
    </>
  )
}

export default CartStep2
