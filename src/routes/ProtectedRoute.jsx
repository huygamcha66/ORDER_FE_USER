/* eslint-disable quotes */
/* eslint-disable semi */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getCartDetail } from "../redux/cartSlice/cartSlice";
// import { selectCurrentUser } from "../redux/userSlice/userSlice";

const ProtectedRoute = () => {
  // const user = useSelector(selectCurrentUser);
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    const refreshToken = localStorage.getItem("refreshToken")
      ? localStorage.getItem("refreshToken")
      : null;

    if (
      (accessToken &&
        refreshToken &&
        jwtDecode(accessToken).exp > new Date() &&
        jwtDecode(refreshToken).exp > new Date()) ||
      !accessToken ||
      !refreshToken
    ) {
      navigate("/dashboard/login");
    } else {
      console.log("««««« 343 »»»»»", 343);
    }
  });
  useEffect(() => {
    const userInfor = localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null;
    dispatch(getCartDetail(userInfor.id));
  }, []);
  // if (!user) return <Navigate to="/dashboard/login" replace={true} />;
  return <Outlet />;
};

export default ProtectedRoute;
