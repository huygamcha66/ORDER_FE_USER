/* eslint-disable quotes */
import { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useLocation, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/userSlice/userSlice'
import { useDispatch } from 'react-redux'

const useDecodedToken = (tokenKey) => {
  const [decodedToken, setDecodedToken] = useState(null)
  const [errorToken, setErrorToken] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    const getTokenAndDecode = async () => {
      try {
        const token = JSON.parse(localStorage.getItem(tokenKey))
          ? JSON.parse(localStorage.getItem(tokenKey))
          : false // Lấy token từ local storage
        console.log('««««« token »»»»»', token);
        if (!token) {
          localStorage.clear()
        }
        if (token) {
          console.log('««««« 123333 »»»»»', 123333);
          const decoded = jwtDecode(token) // Decode token
          const currentDate = Date.now() / 1000 // đổi sang giây
          // fix, không vo được dây
          console.log('««««« currentDate »»»»»', currentDate);
          console.log('«««««  decoded.exp »»»»»', decoded.exp);
          if (currentDate > decoded.exp) {
            console.log('««««« 555 »»»»»', 555);
            console.log('««««« decodedToken »»»»»', decoded.id);
            await dispatch(logoutUser(decoded.id)).unwind()
            localStorage.clear()
            console.log('««««« 999 »»»»»', 999);
            navigate('/login')
          } else {
            setDecodedToken(decoded)
          }
        } else {
          setErrorToken(true)
        }
      } catch (err) {
        setErrorToken('Lỗi khi decode token: ' + err.message)
      }
    }

    getTokenAndDecode()
  }, [navigate, tokenKey, location])
  return { decodedToken, errorToken }
}

export default useDecodedToken
