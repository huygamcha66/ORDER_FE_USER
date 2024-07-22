/* eslint-disable quotes */
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const useDecodedToken = (tokenKey) => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [errorToken, setErrorToken] = useState(false);

  useEffect(() => {
    const getTokenAndDecode = () => {
      try {
        const token = JSON.parse(localStorage.getItem(tokenKey)); // Lấy token từ local storage
        if (token) {
          const decoded = jwtDecode(token); // Decode token
          console.log("««««« decoded »»»»»", decoded);
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
