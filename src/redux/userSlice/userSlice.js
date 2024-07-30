/* eslint-disable quotes */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROOT } from '../../utils/constants'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { Navigate } from 'react-router-dom'

const initialState = {
  isLoading: false,
  success: false,
  isSend: false,
  isActive: false,
  isNull: false,
  error: '',
  user: {}
}
// Thunk để lấy thông tin chi tiết của người dùng dựa trên addressIP
const detailMe = createAsyncThunk('user/detailMe', async (addressIP, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_ROOT}/api/v1.0/auth/detail-me`, addressIP)
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data)
    } else {
      throw error
    }
  }
})

const registerUser = createAsyncThunk('user/registerUser', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_ROOT}/api/v1.0/auth/register`, data)
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data)
    } else {
      throw error
    }
  }
})

const loginUser = createAsyncThunk('user/loginUser', async (data, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }
    const response = await axios.post(`${API_ROOT}/api/v1.0/auth/login`, data, config)
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data)
    } else {
      throw error
    }
  }
})

const logoutUser = createAsyncThunk('user/logoutUser', async (value, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }
    const response = await axios.patch(
      `${API_ROOT}/api/v1.0/auth/logout`,
      { userId: value },
      config
    )
    // Xóa token khỏi local storage sau khi logout thành công
    localStorage.removeItem('token')
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data)
    } else {
      throw error
    }
  }
})

const sendCodeResetPassword = createAsyncThunk(
  'user/sendCodeResetPassword',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'content-type': 'application/json'
        }
      }
      const response = await axios.post(`${API_ROOT}/api/v1.0/auth/forgot-password`, data, config)
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

const changePasswordUser = createAsyncThunk(
  'user/changePasswordUser',
  async (value, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'content-type': 'application/json'
        }
      }
      const response = await axios.patch(`${API_ROOT}/api/v1.0/auth/reset-password`, value, config)
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

const sendLinkActiveUser = createAsyncThunk(
  'sendLinkActiveUser/user',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'content-type': 'application/json'
        }
      }
      const response = await axios.post(`${API_ROOT}/api/v1.0/auth/send-link`, data, config)
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

export const userSlice = createSlice({
  name: 'user',
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
    resetState: (state) => {
      state.error = ''
      state.success = false
      state.isSend = false
    }
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
      state.success = false
      state.error = ''
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isLoading = false
      state.success = false
      state.error = action.payload.error
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.success = true
      state.user = action.payload
    })

    // login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
      state.success = false
      state.error = ''
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isLoading = false
      state.success = false

      state.error = action.payload.message
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isLoading = false
      state.success = true
      state.user = action.payload
    })

    // logout
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true
      state.success = false
      state.error = ''
    })
    builder.addCase(logoutUser.rejected, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isLoading = false
      state.success = false
      state.error = action.payload.message
    })
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.success = true
      state.user = action.payload
    })

    // sendCodeResetPassword
    builder.addCase(sendCodeResetPassword.pending, (state) => {
      state.isLoading = true
      state.isSend = false
      state.error = ''
    })
    builder.addCase(sendCodeResetPassword.rejected, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isLoading = false
      state.isSend = false
      state.error = action.payload.message
    })
    builder.addCase(sendCodeResetPassword.fulfilled, (state) => {
      state.isLoading = false
      state.isSend = true
    })

    // changePasswordUser
    builder.addCase(changePasswordUser.pending, (state) => {
      state.isLoading = true
      state.success = false
      state.error = ''
    })
    builder.addCase(changePasswordUser.rejected, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isLoading = false
      state.success = false
      state.error = action.payload.message
    })
    builder.addCase(changePasswordUser.fulfilled, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isLoading = false
      state.success = true
    })

    builder.addCase(sendLinkActiveUser.pending, (state, action) => {
      state.isActive = false
    })
    builder.addCase(sendLinkActiveUser.rejected, (state, action) => {
      console.log('««««« action »»»»»', action)
      state.isActive = false
    })
    builder.addCase(sendLinkActiveUser.fulfilled, (state, action) => {
      state.isActive = true
    })

    // get detail me
    builder
      .addCase(detailMe.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.isNull = false
      })
      .addCase(detailMe.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.isNull = false

      })
      .addCase(detailMe.rejected, (state, action) => {
        console.log('««««« action »»»»»', action)
        state.isLoading = false
        state.error = action.payload
        state.isNull = true

      })
  }
})

const { reducer, actions } = userSlice
export const { resetState } = actions
export default reducer
export {
  registerUser,
  loginUser,
  sendCodeResetPassword,
  changePasswordUser,
  sendLinkActiveUser,
  logoutUser,
  detailMe
}
// export const { login, logout } = userSlice.actions;
// // Selectors: Là nơi dành cho các components bên dưới gọi bằng hook useSelector() để lấy dữ liệu từ trong kho redux store ra sử dụng
// export const selectCurrentUser = (state) => {
//   return state.user.currentUser;
// };

// export const userReducer = userSlice.reducer;
