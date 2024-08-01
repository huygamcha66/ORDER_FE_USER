/* eslint-disable quotes */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_ROOT } from '../../utils/constants'

// Trạng thái ban đầu
const initialState = {
  orders: [],
  detailOrder: [],
  isLoading: false,
  error: null
}

const DEFAULT_PAGINATION = {
  LIMIT: 10 // Số lượng item mặc định mỗi trang
}

// Thunk để tạo đơn hàng
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_ROOT}/api/v1.0/orders/create`, orderData)
      return response.data.payload
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        throw error
      }
    }
  }
)

// Thunk để lấy danh sách đơn hàng của người dùng
export const listOrderMe = createAsyncThunk(
  'orders/listOrderMe',
  async (
    { userId, orderId, status, startDate, endDate, page = 1, pageSize = DEFAULT_PAGINATION.LIMIT },
    { rejectWithValue }
  ) => {
    try {
      const params = { page, pageSize, orderId, status, startDate, endDate }
      const response = await axios.get(`${API_ROOT}/api/v1.0/orders/list/${userId}`, { params })
      return response.data
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        throw error
      }
    }
  }
)

// thunk để lấy chi tiết từng đơn hàng
export const getDetailOrder = createAsyncThunk(
  '/order/getDetailOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_ROOT}/api/v1.0/orders/${orderId}`)
      return response.data.payload
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        throw error
      }
    }
  }
)

export const complainOrder = createAsyncThunk(
  '/order/complainOrder',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${API_ROOT}/api/v1.0/orders/complain`, data)
      return response.data.payload
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        throw error
      }
    }
  }
)

// Tạo orderSlice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrders(state) {
      state.orders = []
      state.error = null
    }
  },
  extraReducers: (builder) => {
    // Xử lý createOrder
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false
        // state.orders.push(action.payload)s
        state.orders = action.payload
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    // Xử lý getOrderList
    // builder
    //   .addCase(getOrderList.pending, (state) => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(getOrderList.fulfilled, (state, action) => {
    //     // console.log("««««« actions »»»»»", actions);
    //     state.isLoading = false;
    //     state.orders = action.payload;
    //   })
    //   .addCase(getOrderList.rejected, (state, action) => {
    //     console.log("««««« action »»»»»", action);
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
    builder
      .addCase(listOrderMe.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(listOrderMe.fulfilled, (state, action) => {
        state.isLoading = false
        state.orders = action.payload.payload
        state.total = action.payload.total
      })
      .addCase(listOrderMe.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

    // phần lấy chi tiết đơn hàng
    builder
      .addCase(getDetailOrder.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getDetailOrder.fulfilled, (state, action) => {
        console.log('««««« actions »»»»»', actions)
        state.isLoading = false
        state.detailOrder = action.payload
      })
      .addCase(getDetailOrder.rejected, (state, action) => {
        console.log('««««« action »»»»»', action)
        state.isLoading = false
        state.error = action.payload
      })

    builder
      .addCase(complainOrder.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(complainOrder.fulfilled, (state, action) => {
        console.log('««««« actions »»»»»', actions)
        state.isLoading = false
        state.detailOrder = action.payload
      })
      .addCase(complainOrder.rejected, (state, action) => {
        console.log('««««« action »»»»»', action)
        state.isLoading = false
        state.error = action.payload
      })
  }
})

// Export reducer và actions
const { reducer, actions } = orderSlice
export const { clearOrders } = actions
export default reducer
