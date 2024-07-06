/* eslint-disable quotes */
/* eslint-disable semi */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
// import { selectCurrentUser } from "../redux/userSlice/userSlice";

const ProtectedRoute = () => {
  // const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    const refreshToken = localStorage.getItem("refreshToken")
      ? localStorage.getItem("refreshToken")
      : null;
    // console.log("««««« accessToken »»»»»", jwtDecode(accessToken).exp);

    // const otherWindow = window.open("https://detail.tmall.com");
    // console.log("««««« otherWindow»»»»»", otherWindow);
    // if (otherWindow) {
    //   console.log("««««« (user.token »»»»»", accessToken);
    //   otherWindow.onload = () => {
    //     otherWindow.postMessage(
    //       {
    //         type: "AUTH_TOKEN",
    //         token: accessToken,
    //         refreshToken: refreshToken,
    //       },
    //       "*"
    //     );
    //   };
    // }
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
  // if (!user) return <Navigate to="/dashboard/login" replace={true} />;
  return <Outlet />;
};

export default ProtectedRoute;
