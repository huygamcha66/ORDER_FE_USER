/* eslint-disable quotes */
/* eslint-disable semi */
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import HeaderScreen from '../../components/Header'
import { Space } from 'antd'
import ExtraHeader from '../../components/ExtraHeader/ExtraHeader'
import { useDispatch } from 'react-redux'
import useDecodedToken from '../../components/UserInfor'
import { useEffect } from 'react'
import { getCartDetail, resetState } from '../../redux/cartSlice/cartSlice'
import { detailMe } from '../../redux/userSlice/userSlice'
import { addressIP, getCanvasFingerprint, getWebGLFingerprint } from '../../common/InforUser'
import clsx from 'clsx'
import style from './Home.module.css'
const Home = () => {
  const dispatch = useDispatch()
  const { decodedToken } = useDecodedToken('token')
  useEffect(() => {
    const check = async () => {
      if (decodedToken) {
        dispatch(getCartDetail({ userId: decodedToken.id }))
        dispatch(
          detailMe({
            addressIP: `${addressIP}&&${getCanvasFingerprint()}&&${getWebGLFingerprint().renderer}`,
          }),
        )
        // dispatch(resetState());
      }
    }
    check()
  }, [decodedToken])
  return (
    <div className={clsx(style.page_container)}>
      <div className={clsx(style.content_wrapper)}>
        <ExtraHeader />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home
