/* eslint-disable quotes */
// eslint-disable-next-line quotes
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_ROOT } from '../../utils/constants'

// URL gốc của API (thay thế bằng URL thực tế của bạn)

// Trạng thái ban đầu
const initialState = {
  carts: [],
  isLoading: false,
  error: null,
  buyProduct: [],
  success: false,
  isDelete: false
}

// Thunk để lấy chi tiết giỏ hàng
const getCartDetail = createAsyncThunk('cart/getDetail', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_ROOT}/api/v1.0/cart`, userId)
    return response.data.payload
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data)
    } else {
      throw error
    }
  }
})

// Thunk để thêm sản phẩm vào giỏ hàng
const addProductToCart = createAsyncThunk(
  'cart/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${API_ROOT}/api/v1.0/cart/add-product`, productData)
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

// Thunk để xóa sản phẩm khỏi giỏ hàng
const deleteProductFromCart = createAsyncThunk(
  'cart/deleteProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${API_ROOT}/api/v1.0/cart/delete-product`, productData)
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

const updateProductFromCart = createAsyncThunk(
  'cart/updateProductFromCart',
  async ({ userId, productId, newQuantity, check, location }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${API_ROOT}/api/v1.0/cart/update-product`, {
        userId,
        productId,
        newQuantity,
        check,
        // đang ở cụm sản phẩm nào
        location
      })
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

const checkAllProductInOneCluster = createAsyncThunk(
  'cart/updateProductFromCart',
  async ({ userId, productId, newQuantity, check, location }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${API_ROOT}/api/v1.0/cart/update-manyProduct`, {
        userId,
        location,
        check
      })
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

// Tạo cartSlice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setBuyProduct(state, action) {
      state.buyProduct = action.payload
    },
    resetState: (state) => {
      state.error = ''
      state.success = false
      state.isSend = false
      state.isDelete = false
    }
    // Các reducer đồng bộ nếu cần
  },
  extraReducers: (builder) => {
    // Xử lý getCartDetail
    builder
      .addCase(getCartDetail.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.success = false
      })
      .addCase(getCartDetail.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.carts = action.payload
      })
      .addCase(getCartDetail.rejected, (state, action) => {
        console.log('««««« action »»»»»', action)
        state.isLoading = false
        state.success = false
        state.error = action.payload
      })

    // Xử lý addProductToCart
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.success = false
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.carts.push(action.payload)
        state.success = true
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.success = false
      })

    // Xử lý updateProductFromCart
    builder
      .addCase(updateProductFromCart.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.success = false
      })
      .addCase(updateProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.carts = action.payload.payload
        // state.carts.push(action.payload);
        state.success = true
      })
      .addCase(updateProductFromCart.rejected, (state, action) => {
        console.log('««««« action »»»»»', action)
        state.isLoading = false
        state.error = action.payload
        state.success = false
      })

    // Xử lý deleteProductFromCart
    builder
      .addCase(deleteProductFromCart.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.success = false
        state.isDelete = false
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.carts = action.payload.payload
        state.success = true
        state.isDelete = true
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.success = false
        state.isDelete = false
      })
  }
})

// Export reducer

const { reducer, actions } = cartSlice
export const { resetState } = actions
export const { setBuyProduct } = actions
export default reducer
export {
  getCartDetail,
  addProductToCart,
  deleteProductFromCart,
  updateProductFromCart,
  checkAllProductInOneCluster
}
