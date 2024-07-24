/* eslint-disable quotes */
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const useDecodedToken = (tokenKey) => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [errorToken, setErrorToken] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getTokenAndDecode = () => {
      try {
        const token = JSON.parse(localStorage.getItem(tokenKey))
          ? JSON.parse(localStorage.getItem(tokenKey))
          : false; // Lấy token từ local storage
        if (!token) {
          navigate("/login");
        }
        if (token) {
          const decoded = jwtDecode(token); // Decode token
          setDecodedToken(decoded);
        } else {
          setErrorToken(true);
        }
      } catch (err) {
        setErrorToken("Lỗi khi decode token: " + err.message);
      }
    };

    getTokenAndDecode();
  }, []);
  return { decodedToken, errorToken };
};

export default useDecodedToken;
