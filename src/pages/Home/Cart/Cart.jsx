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
  Space
} from 'antd'
import useDecodedToken from '../../../components/UserInfor'
import { MdOutlineDelete } from 'react-icons/md'
import { openNotificationWithIcon } from '../../../components/Nofitication'
import { API_ROOT } from '../../../utils/constants'
import axios from 'axios'
import ClusterProduct from './component/ClusterProduct'
import { feeService } from '../../../utils'

const Cart = () => {
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

  // dsach tổng, phí dịch vụ của từng cluster
  const [priceCluster, setPriceCluster] = useState([])

  // hàm tình tổng của các cluster
  const handleCalculatorPriceCluster = (index, item) => {
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
      feeService: feeService(totalAmount * rate)
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
  const totalPrice = useMemo(() => {
    const total = priceCluster.reduce((acc, cluster) => {
      const clusterTotal =
        (cluster.totalPrice * rate + (cluster.totalPrice * rate * cluster.feeService) / 100) * 0.7
      return acc + clusterTotal
    }, 0)

    // Nhân kết quả cuối cùng với 70%
    return total
  }, [priceCluster])

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
    if (!totalPrice) {
      return openNotificationWithIcon('error', 'Vui lòng chọn sản phẩm')
    } else {
      navigate('/cart/step2')
    }
    // improve: dùng unwrap() để sử dụng async await đối với js redux-thunk
    // sử dụng trycatch để bắt lỗi
    // const updateCartProducts = async () => {
    //   try {
    //     // Tạo một mảng các promises từ map
    //     const promises = carts.products.map((product, index) =>
    //       dispatch(
    //         updateProductFromCart({
    //           userId: decodedToken.id,
    //           newQuantity: quantities[index],
    //           check: checkedStates[index],
    //           productId: product.productId
    //         })
    //       ).unwrap()
    //     )

    //     // Đợi tất cả các promises hoàn thành
    //     await Promise.all(promises)

    //     // Chuyển hướng sau khi tất cả các updates hoàn thành
    //     navigate('/cart/step2')
    //   } catch (error) {
    //     // Xử lý lỗi nếu có
    //     console.log('««««« error »»»»»', error)
    //   }
    // }
    // await updateCartProducts()
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  // fix_huyg Phải đưa tất cả các hàm (CRUD) của hàm con về hàm cha hết
  // vì nó bị re-render theo số lương của hàm con, không kiểm soát được, bug 2 ngày mới fix được đó.
  const handleDelete = async (productId) => {
    const updateCartProducts = async () => {
      try {
        // Tạo một mảng các promises từ map
        const promises = carts.products.map((product, index) =>
          dispatch(
            updateProductFromCart({
              userId: decodedToken.id,
              newQuantity: quantities[index],
              check: checkedStates[index],
              productId: product.productId
            })
          ).unwrap()
        )
        // Đợi tất cả các promises hoàn thành
        await Promise.all(promises)
      } catch (error) {
        // Xử lý lỗi nếu có
        console.log('««««« error »»»»»', error)
      }
    }
    await updateCartProducts()
    setIsModalOpen(false)
    dispatch(deleteProductFromCart({ userId: decodedToken.id, productId }))
  }

  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isUpdating) {
        event.preventDefault()
        event.returnValue = '' // Cần để hiển thị hộp thoại cảnh báo trên một số trình duyệt
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [isUpdating])

  return (
    <>
      <Row justify="center">
        <Col xs={20}>
          <div>
            <h2>Giỏ hàng</h2>
            {carts && carts.productClusters ? (
              <>
                {carts.productClusters.map((item, index) => (
                  <div style={{ marginBottom: '1rem' }} key={index}>
                    <ClusterProduct
                      rate={rate}
                      priceCluster={priceCluster}
                      updatePriceCluster={setPriceCluster}
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
          <Space
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              alignItems: 'center'
            }}
          >
            <Space style={{ fontSize: '18px', color: 'red', fontWeight: 600 }}>
              Tổng tiền: {Number(totalPrice.toFixed(0)).toLocaleString('vi-VN')} VNĐ
            </Space>
            <Button type="primary" onClick={handlePlaceOrder}>
              Đặt hàng
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default Cart
