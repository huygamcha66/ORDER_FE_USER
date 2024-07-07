/* eslint-disable quotes */
// eslint-disable-next-line quotes
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ROOT } from "../../utils/constants";

// URL gốc của API (thay thế bằng URL thực tế của bạn)

// Trạng thái ban đầu
const initialState = {
  carts: [],
  isLoading: false,
  error: null,
  buyProduct: [],
};

// Thunk để lấy chi tiết giỏ hàng
const getCartDetail = createAsyncThunk(
  "cart/getDetail",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_ROOT}/api/v1.0/cart`, {
        userId,
      });
      return response.data.payload;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

// Thunk để thêm sản phẩm vào giỏ hàng
const addProductToCart = createAsyncThunk(
  "cart/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_ROOT}/api/v1.0/cart/add-product`,
        productData
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

// Thunk để xóa sản phẩm khỏi giỏ hàng
const deleteProductFromCart = createAsyncThunk(
  "cart/deleteProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_ROOT}/api/v1.0/cart/delete-product`,
        productData
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        throw error;
      }
    }
  }
);

// Tạo cartSlice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setBuyProduct(state, action) {
      state.buyProduct = action.payload;
    },
    // Các reducer đồng bộ nếu cần
  },
  extraReducers: (builder) => {
    // Xử lý getCartDetail
    builder
      .addCase(getCartDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCartDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts = action.payload;
      })
      .addCase(getCartDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Xử lý addProductToCart
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts.push(action.payload);
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Xử lý deleteProductFromCart
    builder
      .addCase(deleteProductFromCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts = action.payload;
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export reducer

const { reducer, actions } = cartSlice;
export const { setBuyProduct } = actions;
export default reducer;
export { getCartDetail, addProductToCart, deleteProductFromCart };
