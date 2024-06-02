/* eslint-disable quotes */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../utils/constants";
import axios from "axios";

const initialState = {
  isLoading: false,
  success: false,
  error: "",
  user: {},
};

// Các hành động gọi api (bất đồng bộ) và cập nhật dữ liệu vào Redux, dùng Middleware createAsyncThunk đi kèm với extraReducers

// export const logoutUserAPI = createAsyncThunk(
//   'user/logoutUserAPI',
//   async (showSuccessMessage = true) => {
//     const response = await authorizedAxiosInstance.delete(`${API_ROOT}/v1/users/logout`)
//     if (showSuccessMessage) {
//       toast.success('Logged out successfully!')
//     }
//     return response.data
//   }
// )
const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await axios.post(
        `${API_ROOT}/api/v1.0/auth/register`,
        data,
        config
      );
      console.log("«««««  response»»»»»", response);
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

// Khởi tạo một cái Slice trong kho lưu trữ - Redux Store
// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   // Reducers: Nơi xử lý dữ liệu đồng bộ
//   reducers: {},
//   // ExtraReducers: Nơi xử lý dữ liệu bất đồng bộ
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.fulfilled, (state, action) => {
//       // action.payload ở dây chính là cái response.data trả về ở trên
//       const user = action.payload
//       state.currentUser = user
//     })
//     builder.addCase(logoutUserAPI.fulfilled, (state) => {
//       /**
//        * API logout sau khi gọi thành công thì sẽ clear thông tin currentUser về null ở đây
//        * Kết hợp ProtectedRoute đã làm ở App.js => code sẽ điều hướng chuẩn về trang Login
//        */
//       state.currentUser = null
//     })
//   }
// })

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login: (state, action) => {
    //   const { email, password } = action.payload;
    //   // Thực hiện xác thực người dùng (ví dụ: kiểm tra email và password)
    //   if (email === "client@gmail.com" && password === "Javascript123456") {
    //     toast.success("Đăng nhập thành công");
    //     state.currentUser = { email };
    //     localStorage.setItem("user", JSON.stringify(state.currentUser));
    //   } else {
    //     state.currentUser = null;
    //     toast.error("email hoặc mật khẩu không đúng");
    //     localStorage.removeItem("user");
    //   }
    // },
    // logout: (state) => {
    //   state.currentUser = null;
    //   toast.success("Đăng xuất thành công");
    //   localStorage.removeItem("user"); // Xóa thông tin người dùng khỏi Local Storage
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.success = false;

      state.error = action.error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.user = action.payload;
    });
  },
});

const { reducer } = userSlice;
export default reducer;
export { loginUser };
// export const { login, logout } = userSlice.actions;
// // Selectors: Là nơi dành cho các components bên dưới gọi bằng hook useSelector() để lấy dữ liệu từ trong kho redux store ra sử dụng
// export const selectCurrentUser = (state) => {
//   return state.user.currentUser;
// };

// export const userReducer = userSlice.reducer;
