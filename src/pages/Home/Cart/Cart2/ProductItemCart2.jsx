import { Checkbox, Flex, Modal, notification, Space } from 'antd'
import { memo, useEffect, useState } from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'

const ProductItemCart2 = memo(
  ({ product, cart, index, onQuantityChange, onDelete, handleChangeSelected, selected, rate }) => {
    const [quantity, setQuantity] = useState(product.quantity)
    const [api, contextHolder] = notification.useNotification()
    const { user } = useSelector((state) => state.users)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
      setIsModalOpen(true)
    }

    const handleCancel = () => {
      setIsModalOpen(false)
    }

    const handleConfirmDelete = (productId) => {
      onDelete(productId)
      setIsModalOpen(false)
      openNotificationWithIcon('success', 'Xoá sản phẩm thành công')
    }

    return (
      <>
        {contextHolder}
        {user && user.user && (
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Flex justify="center">
                {/* <Checkbox
                  type="checkbox"
                  onChange={() => handleChangeSelected(product.productId)}
                  checked={selected.includes(product.productId)}
                /> */}
              </Flex>
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <div style={{ display: 'flex' }}>
                {!product.coverImageUrl?.includes('video') ? (
                  <img
                    src={
                      product.coverImageUrl.startsWith('https:')
                        ? product.coverImageUrl
                        : `https:${product.coverImageUrl}`
                    }
                    alt="Sản phẩm"
                    style={{
                      width: '50px',
                      marginRight: '10px',
                      height: '50px'
                    }}
                  />
                ) : (
                  <video
                    className="video_thumbnail"
                    src={
                      product.coverImageUrl?.startsWith('https:')
                        ? product.coverImageUrl
                        : `https:${product.coverImageUrl}`
                    }
                    style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    controls={false}
                  >
                    Trình duyệt không hỗ trợ ảnh
                  </video>
                )}
                <Flex vertical gap={10}>
                  <a style={{ color: '#000' }} target="_blank" href={cart.productUrl}>
                    {product.name}
                  </a>
                  <div>
                    {product.productMoreInfo &&
                      JSON.parse(product.productMoreInfo).map((info, index) => (
                        <Space key={index}>{info} </Space>
                      ))}
                  </div>
                </Flex>
              </div>
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{quantity}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              {parseInt((product.price * rate).toFixed(0)).toLocaleString('vi-VN')} đ
              <br />¥{product.price.toLocaleString('zh-CN')}
            </td>
            <td
              style={{
                border: '1px solid #ddd',
                padding: '8px',
                fontWeight: 'bolder'
              }}
            >
              {parseInt((product.price * quantity * rate).toFixed(0)).toLocaleString('vi-VN')} đ
              <br />¥{(product.price * quantity).toLocaleString('zh-CN')}
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Flex justify="center">
                {/* <button
                  onClick={showModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer'
                  }}
                >
                  <MdOutlineDelete style={{ width: '20px', height: '20px' }} />
                </button> */}
                <Modal
                  title="Bạn muốn xoá sản phẩm này chứ?"
                  open={isModalOpen}
                  onOk={() => handleConfirmDelete(product.productId)}
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
        )}
      </>
    )
  }
)

export default ProductItemCart2
