import axios from 'axios'
import { API_ROOT } from '../utils/constants'

// đóng gỗ
export const cartBoxService = async ({ userId, productClusterId }) => {
  try {
    const response = await axios.post(`${API_ROOT}/api/v1.0/cart/box`, {
      userId,
      productClusterId
    })
    return response.data
  } catch (error) {
    console.error('API call error:', error)
    throw error // Ném lỗi để xử lý trong phần gọi hàm
  }
}

export const removeProductFromCart = async ({ userId, productClusterId, ids }) => {
  try {
    const response = await axios.delete(`${API_ROOT}/api/v1.0/cart/delete-many-product`, {
      params: {
        userId,
        productClusterId,
        ids
      }
    })
    return response.data
  } catch (error) {
    console.error('API call error:', error)
    throw error // Ném lỗi để xử lý trong phần gọi hàm
  }
}
