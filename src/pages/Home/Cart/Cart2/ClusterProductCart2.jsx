import { Checkbox, Flex, Modal, Space } from 'antd'
import { MdOutlineDelete } from 'react-icons/md'
// import ProductItem from './ProductItem'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  checkAllProductInOneCluster,
  deleteCluster,
  deleteProductFromCart,
  updateProductFromCart
} from '../../../../redux/cartSlice/cartSlice'
import { openNotificationWithIcon } from '../../../../components/Nofitication'
import { cartBoxService } from '../../../../service/Cart'
import ProductItemCart2 from './ProductItemCart2'

const ClusterProductCart2 = ({ rate, item, index, userId, setPriceCluster, priceCluster }) => {
  const dispatch = useDispatch()
  const [clusterItem, setClusterItem] = useState(item.products)
  const [selected, setSelected] = useState([])
  const [isBox, setIsBox] = useState(item.check)

  useEffect(() => {
    const temp = item.products.reduce((acc, item) => {
      if (item.check) {
        acc.push(item.productId)
      }
      return acc
    }, [])
    setSelected(temp)
  }, [item])

  const handleDeleteProduct = async (productId) => {
    try {
      await dispatch(
        deleteProductFromCart({
          userId: userId,
          location: +index,
          productId: productId
        })
      ).unwrap()

      setClusterItem((prevClusterItem) =>
        prevClusterItem.filter((product) => product.productId !== productId)
      )
      setSelected((prevSelected) => prevSelected.filter((id) => id !== productId))
    } catch (error) {
      console.log('««««« error »»»»»', error)
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)

  const handleConfirmDelete = async () => {
    try {
      await dispatch(
        deleteCluster({
          userId: userId,
          productClusterId: item._id
        })
      ).unwrap()
      setSelected([])
      setClusterItem([])
      openNotificationWithIcon('success', 'Xoá cụm sản phẩm')
    } catch (error) {
      console.log('««««« error »»»»»', error)
    }
    setIsModalOpen(false)
  }

  const handleBox = async () => {
    setIsBox(!isBox)
    await cartBoxService({
      userId: userId,
      productClusterId: item._id
    })
  }

  useEffect(() => {
    setPriceCluster(index, clusterItem, item._id)
  }, [clusterItem, selected])

  return (
    <>
      {clusterItem.length ? (
        <>
          <div style={{ marginTop: '20px' }} key={item._id}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', width: '40%' }}>
                    Sản phẩm
                  </th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', width: '10%' }}>
                    Số lượng
                  </th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', width: '20%' }}>
                    Đơn giá
                  </th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', width: '20%' }}>
                    Tổng tiền
                  </th>
                </tr>
              </thead>
              <tbody>
                {clusterItem.map((product, index) => {
                  if (product.check) {
                    return (
                      <ProductItemCart2
                        rate={rate}
                        product={product}
                        key={index}
                        cart={item}
                        index={index}
                        selected={selected}
                        onDelete={handleDeleteProduct}
                      />
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
          <Space
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem',
              border: '1px solid #ddd',
              borderTop: '0px',
              alignItems: 'center'
            }}
          >
            <Flex vertical>
              <div style={{ paddingBottom: '10px' }}>
                Tiền hàng:{' '}
                {priceCluster[index]
                  ? parseInt(
                      Number(priceCluster[index].totalPrice * rate).toFixed(0)
                    ).toLocaleString('vi-VN')
                  : 0}{' '}
                đ
              </div>
              <div style={{ paddingBottom: '10px' }}>
                {' '}
                Phí dịch vụ: {priceCluster[index] ? priceCluster[index].feeService : 3} %
              </div>
              <div>
                Tổng giá tiền:{' '}
                {priceCluster[index]
                  ? parseInt(
                      (
                        Number(priceCluster[index].totalPrice * rate) +
                        (Number(priceCluster[index].totalPrice * rate) *
                          priceCluster[index].feeService) /
                          100
                      ).toFixed(0)
                    ).toLocaleString('vi-VN')
                  : 0}{' '}
                đ
              </div>
            </Flex>
            <Space>
              Đóng gỗ
              <Checkbox disabled type="checkbox" onChange={handleBox} checked={isBox} />
            </Space>
          </Space>
        </>
      ) : null}
    </>
  )
}

export default ClusterProductCart2
