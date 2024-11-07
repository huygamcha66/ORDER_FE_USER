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
import { useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'

const CartStep2 = () => {
  const { carts } = useSelector((state) => state.carts)
  const { decodedToken } = useDecodedToken('token')
  const { user } = useSelector((state) => state.users)
  const [rate, setRate] = useState()

  // kiểm tra xem có đơn nào được sẵn sàng để cọc không
  const [isDeposit, setIsDeposit] = useState(0)

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

  useEffect(() => {
    if (carts.productClusters && carts.productClusters.length) {
      const count = carts.productClusters.filter((c) =>
        c.products.some((product) => product.check === true)
      ).length
      if (count) {
        setIsDeposit(count)
      }
    }
  }, [carts])

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
          const totalPriceBeforeFeeService = priceCluster[index].totalPrice

          // Gọi hàm removeProductFromCart trước
          try {
            // Sau khi xóa sản phẩm, gọi addNewOrderService
            await addNewOrderService({
              clusterId,
              productList: selectedProducts,
              userId: user.user?._id,
              deliveryAddress: addressDelivery,
              rateMoney: rate,
              rateOrder: feeService(totalPriceBeforeFeeService * rate) / 100, //(phí giao dịch)
              totalPriceBeforeFeeService: +totalPriceBeforeFeeService,
              check: item.check // Đóng gỗ
            })

            await removeProductFromCart({
              userId: user.user?._id,
              productClusterId: clusterId,
              ids
            })
          } catch (error) {
            console.error('Lỗi khi gọi API:', error)
          } finally {
            openNotificationWithIcon('success', 'Đặt hàng thành công')

            // setTimeout(() => {
            //   window.location.reload()
            //   setLoadingPlace(false)
            // }, 2000)
          }
        }
      } else {
        console.log('Số dư tài khoản không đủ để thực hiện đặt hàng')
      }
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Row justify="center">
      {isDeposit ? (
        <>
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
                  Tiền cọc (70%):
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
              <Image
                width={350}
                src="https://pub-50bb58cfabdd4b93abb4e154d0eada9e.r2.dev/zalo.jpg"
              />
            </Flex>
          </Modal>
        </>
      ) : (
        <Empty style={{ marginTop: '30px' }} description={<span>Không có sản phẩm nào</span>} />
      )}
    </Row>
  )
}

export default CartStep2
