import axios from 'axios'
import { API_ROOT } from '../utils/constants'

// đóng gỗ
export const addNewOrderService = async ({
  productList,
  purchaseFee,
  userId,
  deliveryAddress,
  rateOrder,
  totalPriceBeforeFeeService,
  rateMoney,
  // đóng gỗ
  check
}) => {
  try {
    const response = await axios.post(`${API_ROOT}/api/v1.0/orders/create`, {
      productList,
      purchaseFee,
      userId,
      deliveryAddress,
      rateOrder,
      rateMoney,
      totalPriceBeforeFeeService,
      // đóng gỗ
      check
    })
    return response.data
  } catch (error) {
    console.error('API call error:', error)
    throw error // Ném lỗi để xử lý trong phần gọi hàm
  }
}

export const confirmChangeQuantity = async ({ orderId, userId }) => {
  try {
    const response = await axios.post(`${API_ROOT}/api/v1.0/orders/confirmChangeQuantityOrder`, {
      orderId,
      userId
    })
    return response.data
  } catch (error) {
    throw error // Ném lỗi để xử lý trong phần gọi hàm
  }
}

export const allOrdersService = async ({ userId }) => {
  try {
    const response = await axios.get(`${API_ROOT}/api/v1.0/orders/list/${userId}`)
    console.log('««««« response »»»»»', response)

    return response.data
  } catch (error) {
    console.error('API call error:', error)
    throw error // Ném lỗi để xử lý trong phần gọi hàm
  }
}
