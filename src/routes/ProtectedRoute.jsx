/* eslint-disable quotes */
/* eslint-disable semi */
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../redux/userSlice/userSlice";

const ProtectedRoute = () => {
  // const user = useSelector(selectCurrentUser);
  // if (!user) return <Navigate to="/dashboard/login" replace={true} />;
  return <Outlet />;
};

export default ProtectedRoute;
