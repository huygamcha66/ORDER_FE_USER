/* eslint-disable quotes */
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import App from '../App'
import RegisterForm from '../pages/Home/Auth/RegisterForm'
import LoginForm from '../pages/Home/Auth/LoginForm'
import Home from '../pages/Home/Home'
import ReputableShop from '../pages/Home/ReputableShop/ReputableShop'
import ListOrders from '../pages/Home/Orders/ListOrders/ListOrders'
import Orders from '../pages/Home/Orders/Orders'
import Profile from '../pages/Home/Member/Profile/Profile'
import Cart from '../pages/Home/Cart/Cart'
import ResetPassword from '../pages/Home/Auth/ResetPassword'
import NotFound from '../pages/Home/NotFound/NotFound'
import HomePage from '../pages/Home/HomePage/HomePage'
import PolicyPage from '../pages/Home/PolicyPage'
import InstructionPage from '../pages/Home/Instruction'
import PriceList from '../pages/Home/PriceList'
import PriceListCon from '../pages/Home/PriceListC'
import ServiceAlipay from '../pages/Home/ServiceAlipay'
import PaymentPage from '../pages/Home/PaymentPage'
import ConverTxt from '../pages/tuetc/converttxt/ConvertTxt'
import FillterExcel from '../pages/tuetc/fillterFile/FillterExcel'
import CartStep2 from '../pages/Home/Cart/CartStep2'
import DetailOrder from '../pages/Home/Orders/DetailOrder'
import TransactionPage from '../pages/Home/Transaction'

const ProtectedRoute = () => {
  const userInfor = localStorage.getItem('token') && localStorage.getItem('token')
  if (!userInfor) {
    return <Navigate to={'/login'} replace={true}></Navigate>
  }
  return <Outlet />
}

const UnauthorizeRoute = () => {
  const userInfor = localStorage.getItem('token') && localStorage.getItem('token')
  if (userInfor) {
    return <Navigate to={'/'} replace={true}></Navigate>
  }
  return <Outlet />
}

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <HomePage />
          },
          {
            path: '/login',
            element: <UnauthorizeRoute />,
            children: [{ path: '', element: <LoginForm /> }]
          },
          {
            path: '/register',
            element: <RegisterForm />
          },
          {
            path: '/reset-password',
            element: <ResetPassword />
          },

          {
            path: '/bang-gia',
            element: <PriceList />
          },
          {
            path: '/bang-gia-ky-gui-hang',
            element: <PriceListCon />
          },
          {
            path: '/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung',
            element: <ServiceAlipay />
          },
          {
            path: '/chinh-sach-bao-mat',
            element: <PolicyPage />
          },
          {
            path: '/huong-dan-mua-hang',
            element: <InstructionPage />
          },
       
          {
            path: '/chuyen-khoan',
            element: <PaymentPage />
          },
          {
            path: '/shop',
            element: <ReputableShop />
          },
          {
            path: '/reset-password',
            element: <ResetPassword />
          },

          {
            element: <ProtectedRoute />,
            children: [
              {
                path: 'order',
                element: <Orders />,
                children: [
                  {
                    path: 'list-orders',
                    element: <ListOrders />
                  },
                  {
                    path: 'list-orders/:id',
                    element: <DetailOrder />
                  },
                ]
              },
              {
                path: '/transaction',
                element: <TransactionPage />
              },
              {
                path: 'member',
                element: <Orders />,
                children: [
                  {
                    path: 'profile',
                    element: <Profile />
                  },
               
                ]
              },
              
              {
                path: 'cart',
                element: <Cart />
              },
              {
                path: 'cart/step2',
                element: <CartStep2 />
              }
            ]
          },
          {
            path: '*',
            element: <NotFound />
          },
        
        ]
      },

      {
        path: 'tuetcUploadFile',
        element: <ConverTxt />
      },
      {
        path: 'tuetcFillterFile',
        element: <FillterExcel />
      }
    ]
  }
])

export default router
