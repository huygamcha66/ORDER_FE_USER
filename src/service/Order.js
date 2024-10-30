import axios from 'axios'
import { API_ROOT } from '../utils/constants'

// đóng gỗ
export const addNewOrderService = async ({
  clusterId,
  productList,
  purchaseFee,
  userId,
  deliveryAddress,
  rateOrder,
  totalPriceBeforeFeeService,
  // đóng gỗ
  check
}) => {
  try {
    const response = await axios.post(`${API_ROOT}/api/v1.0/orders/create`, {
      clusterId,
      productList,
      purchaseFee,
      userId,
      deliveryAddress,
      rateOrder,
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
