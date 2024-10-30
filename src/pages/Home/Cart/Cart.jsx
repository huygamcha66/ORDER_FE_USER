import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCluster, resetState } from '../../../redux/cartSlice/cartSlice'
import './Cart.css'
import { Button, Col, Empty, Row, Space } from 'antd'
import { openNotificationWithIcon } from '../../../components/Nofitication'
import { API_ROOT } from '../../../utils/constants'
import axios from 'axios'
import ClusterProduct from './component/ClusterProduct'
import { feeService } from '../../../utils'

const Cart = () => {
  const { carts, isDeleteCluster } = useSelector((state) => state.carts)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)
  const [rate, setRate] = useState()
  const [productClusters, setProductClusters] = useState(carts || [])
  const navigate = useNavigate()
  const [priceCluster, setPriceCluster] = useState([])
  const firstRender = useRef(true)

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
      feeService: feeService(totalAmount * rate)
    }

    setPriceCluster((prevPriceCluster) => {
      const hasCluster = prevPriceCluster.findIndex((cluster) => cluster.index === index)
      let updatedPriceCluster

      if (hasCluster !== -1) {
        updatedPriceCluster = [...prevPriceCluster]
        updatedPriceCluster[hasCluster] = newCluster
      } else {
        updatedPriceCluster = [...prevPriceCluster, newCluster]
      }

      return updatedPriceCluster
    })
  }

  const totalPrice = useMemo(() => {
    const total = priceCluster.reduce((acc, cluster) => {
      const clusterTotal =
        (cluster.totalPrice * rate + (cluster.totalPrice * rate * cluster.feeService) / 100) * 0.7
      return acc + clusterTotal
    }, 0)

    return total
  }, [priceCluster])

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const payload = await axios.get(`${API_ROOT}/api/v1.0/rates/getCurrentRate`)
        setRate(payload.data && payload.data.payload[0].value)
      } catch (error) {
        console.log('Error fetching rate:', error)
      }
    }
    fetchRate()
  }, [])

  const handlePlaceOrder = () => {
    if (!totalPrice) {
      return openNotificationWithIcon('error', 'Vui lòng chọn sản phẩm')
    } else {
      navigate('/cart/step2')
    }
  }

  const handleConfirmDelete = async (userId, productClusterId) => {
    try {
      await dispatch(
        deleteCluster({
          userId: userId,
          productClusterId: productClusterId
        })
      ).unwrap()

      dispatch(resetState())

      // Cập nhật lại state cục bộ để xoá cluster trên giao diện ngay lập tức

      setProductClusters((prevClusters) => ({
        ...prevClusters,
        productClusters: prevClusters.productClusters.filter(
          (cluster) => cluster._id !== productClusterId
        )
      }))

      setPriceCluster((prevPriceCluster) =>
        prevPriceCluster.filter((cluster) => cluster.index !== productClusterId)
      )

      openNotificationWithIcon('success', 'Xoá cụm sản phẩm')
    } catch (error) {
      console.log('Error deleting cluster:', error)
    }
  }
  useEffect(() => {
    // Cập nhật productClusters khi carts thay đổi
    console.log('«««««  carts»»»»»', carts, isDeleteCluster)
    setProductClusters(carts)
  }, [carts, isDeleteCluster])
  console.log('««««« productClusters »»»»»', productClusters)
  return (
    <Row justify="center">
      <Col xs={20}>
        <div>
          <h2>Giỏ hàng</h2>
          {productClusters && productClusters.productClusters ? (
            <>
              {productClusters.productClusters.map((item) => {
                return (
                  // fix bug xoá, thay đổi key của component
                  <div style={{ marginBottom: '1rem' }} key={item._id}>
                    <ClusterProduct
                      rate={rate}
                      priceCluster={priceCluster}
                      setPriceCluster={handleCalculatorPriceCluster}
                      userId={user.user?._id}
                      item={item}
                      index={item._id}
                      handleConfirmDelete={handleConfirmDelete}
                    />
                  </div>
                )
              })}
            </>
          ) : (
            <Empty style={{ marginTop: '30px' }} description={<span>Không có sản phẩm nào</span>} />
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
  )
}

export default Cart
