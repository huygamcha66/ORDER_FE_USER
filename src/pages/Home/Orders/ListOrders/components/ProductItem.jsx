/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
import { Button, Col, Flex, Modal, notification, Row, Space } from 'antd'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'

import moment from 'moment-timezone'
import { STATUS_ORDER_MAP } from '../../../../../utils/constants'
import { useState } from 'react'
import { confirmChangeQuantity } from '../../../../../service/Order'

const ProductItem = ({ order, handleUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = async () => {
    const response = await confirmChangeQuantity({ orderId: order._id, userId: order.userId })
    if (response.message) handleUpdate()
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex justify="center">{order.idOrderTq ? order.idOrderTq : 'Đang cập nhật'}</Flex>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex justify="center">
              {' '}
              {moment(order.createdAt).tz('Asia/Ho_Chi_Minh').format('HH:mm:ss DD-MM-YYYY')}
            </Flex>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex justify="center"> {STATUS_ORDER_MAP[order.status]}</Flex>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex align="center" vertical>
              <Space style={{ padding: '4px 0px' }}>
                {parseInt(
                  order.totalOrder + order.transportFeeTq + order.transportFee - order.orderDiscount
                ).toLocaleString()}
                (VND)
              </Space>
            </Flex>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex justify="center">
              <Link to={`/order/list-orders/${order._id}`}>
                <FaEye style={{ color: '#fb5731' }} />
              </Link>
            </Flex>
          </td>
          {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <Flex justify="center">
              <Button
                onClick={showModal}
                disabled={!order.isConfirmedChangeQuantity}
                style={{ background: '#fb5731' }}
                type="primary"
              >
                Xác nhận
              </Button>
            </Flex>
          </td> */}
        </tr>
      </tbody>
      <Modal title="Xác nhận thay đổi" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Bạn đã chắc chắn xác nhận thay đổi này</p>
      </Modal>
    </>
  )
}

export default ProductItem
