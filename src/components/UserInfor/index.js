/* eslint-disable quotes */
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const useDecodedToken = (tokenKey) => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [errorToken, setErrorToken] = useState(null);

  useEffect(() => {
    const getTokenAndDecode = () => {
      try {
        const token = JSON.parse(localStorage.getItem(tokenKey)); // Lấy token từ local storage
        if (token) {
          const decoded = jwtDecode(token); // Decode token
          setDecodedToken(decoded);
        } else {
          setErrorToken("Token không tồn tại trong local storage");
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
