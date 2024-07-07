/* eslint-disable quotes */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ROOT } from "../../utils/constants";

// Trạng thái ban đầu
const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

// Thunk để tạo đơn hàng
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_ROOT}/api/v1.0/orders/create`,
        orderData
      );
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

// Thunk để lấy danh sách đơn hàng của người dùng
export const getOrderList = createAsyncThunk(
  "order/getOrderList",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_ROOT}/api/v1.0/order`, {
        params: { userId },
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

// Tạo orderSlice
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrders(state) {
      state.orders = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Xử lý createOrder
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        console.log("««««« action »»»»»", action);
        state.isLoading = false;
        state.error = action.payload;
      });

    // Xử lý getOrderList
    builder
      .addCase(getOrderList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrderList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getOrderList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export reducer và actions
const { reducer, actions } = orderSlice;
export const { clearOrders } = actions;
export default reducer;
