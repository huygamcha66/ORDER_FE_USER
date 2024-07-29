/* eslint-disable quotes */
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import App from '../App'
import RegisterForm from '../pages/Home/Auth/RegisterForm'
import LoginForm from '../pages/Home/Auth/LoginForm'
import Home from '../pages/Home/Home'
import GeneralBoard from '../pages/Home/GeneralBoard/GeneralBoard'
import ReputableShop from '../pages/Home/ReputableShop/ReputableShop'
import AddOrders from '../pages/Home/Orders/AddOrders/AddOrders'
import ListOrders from '../pages/Home/Orders/ListOrders/ListOrders'
import PendingOrders from '../pages/Home/Orders/PendingOrders/PendingOrders'
import Orders from '../pages/Home/Orders/Orders'
import Profile from '../pages/Home/Member/Profile/Profile'
import ChangePassword from '../pages/Home/Member/ChangePassword/ChangePassword'
import Reduces from '../pages/Home/Member/Reduces/Reduces'
import Wallet from '../pages/Home/Member/Wallet/Wallet'
import DomesticShipping from '../pages/Home/Member/DomesticShipping/DomesticShipping'
import Deposit from '../pages/Home/Member/Deposit/Deposit'
import ShipOrders from '../pages/Home/ShipOrders/ShipOrders'
import ListShipOrders from '../pages/Home/ShipOrders/ListShipOrders/ListShipOrders'
import ListShipIds from '../pages/Home/ShipOrders/ListShipIds/ListShipIds'
import Ship from '../pages/Home/Ship/Ship'
import Trasnport from '../pages/Home/Ship/Trasnport/Trasnport'
import Finship from '../pages/Home/Ship/Finship/Finship'
import Cart from '../pages/Home/Cart/Cart'
import ShipOrder from '../pages/Home/ShipOrders/ShipOrder/ShipOrder'
import ResetPassword from '../pages/Home/Auth/ResetPassword'
import NotFound from '../pages/Home/NotFound/NotFound'
import DeliveryNote from '../pages/Home/StoreVN/DeliveryNote/DeliveryNote'
import ListComplains from '../pages/Home/Complain/ListComplains/ListComplains'
import HomePage from '../pages/Home/HomePage/HomePage'
import PolicyPage from '../pages/Home/PolicyPage'
import InstructionPage from '../pages/Home/Instruction'
import PriceList from '../pages/Home/PriceList'
import PriceListCon from '../pages/Home/PriceListC'
import ServiceAlipay from '../pages/Home/ServiceAlipay'
import TrackingPage from '../pages/Home/TrackingPage'
import NewPage from '../pages/Home/NewPage'
import PaymentPage from '../pages/Home/PaymentPage'
import ConverTxt from '../pages/tuetc/converttxt/ConvertTxt'
import FillterExcel from '../pages/tuetc/fillterFile/FillterExcel'
import ResetForm from '../pages/Home/Auth/ResetForm'
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
            path: '/reset',
            element: <ResetForm />
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
            path: '/category/tin-tuc',
            element: <NewPage />
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
            path: '/tracking',
            element: <TrackingPage />
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
            path: '/transaction',
            element: <TransactionPage />
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
                  {
                    path: 'add-orders',
                    element: <AddOrders />
                  },
                  {
                    path: 'pending-orders',
                    element: <PendingOrders />
                  }
                ]
              },
              {
                path: 'member',
                element: <Orders />,
                children: [
                  {
                    path: 'profile',
                    element: <Profile />
                  },
                  {
                    path: 'change-password',
                    element: <ChangePassword />
                  },
                  {
                    path: 'reduces',
                    element: <Reduces />
                  },
                  {
                    path: 'wallet',
                    element: <Wallet />
                  },
                  {
                    path: 'domestic-shipping',
                    element: <DomesticShipping />
                  },
                  {
                    path: 'deposit',
                    element: <Deposit />
                  }
                ]
              },
              {
                path: 'ship-orders',
                element: <ShipOrders />,
                children: [
                  {
                    path: '',
                    element: <ShipOrder />
                  },
                  {
                    path: 'list-ship-orders',
                    element: <ListShipOrders />
                  },
                  {
                    path: 'list-ship-ids',
                    element: <ListShipIds />
                  }
                ]
              },
              {
                path: 'ship',
                element: <Ship />,
                children: [
                  {
                    path: 'transport',
                    element: <Trasnport />
                  },
                  {
                    path: 'finship',
                    element: <Finship />
                  }
                ]
              },
              {
                path: 'storevn/delivery-note',
                element: <DeliveryNote />
              },
              {
                path: 'complain/list-complains',
                element: <ListComplains />
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
          {
            path: '/general-board',
            element: <GeneralBoard />
          }
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
