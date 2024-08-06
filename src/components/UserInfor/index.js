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
        if (!token) {
          localStorage.clear()
        }
        if (token) {
          const decoded = jwtDecode(token) // Decode token
          const currentDate = Date.now() / 1000 // đổi sang giây
          // fix, không vo được dây
          if (currentDate > decoded.exp) {
            await dispatch(logoutUser(decoded.id)).unwind()
            localStorage.clear()
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
