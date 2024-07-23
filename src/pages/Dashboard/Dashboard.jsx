/* eslint-disable quotes */
/* eslint-disable semi */
import { Helmet } from "react-helmet";
import ExtraFooter from "../../components/ExtraFooter/ExtraFooter";
import ExtraHeader from "../../components/ExtraHeader/ExtraHeader";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectCurrentUser } from "../../redux/userSlice/userSlice";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";
import Footer from "../../components/Footer/Footer";
import HeaderScreen from "../../components/Header";
import { Flex, Space } from "antd";
import { useEffect } from "react";
import { getCartDetail, resetState } from "../../redux/cartSlice/cartSlice";
import { detailMe } from "../../redux/userSlice/userSlice";
import useDecodedToken from "../../components/UserInfor";
import {
  addressIP,
  getCanvasFingerprint,
  getWebGLFingerprint,
} from "../../common/InforUser";

const Dashboard = () => {
  // const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { decodedToken } = useDecodedToken("token");
  useEffect(() => {
    const check = async () => {
      if (decodedToken) {
        dispatch(getCartDetail({ userId: decodedToken.id }));
        // dispatch(detailMe({ addressIP: navigator.userAgent }));
        dispatch(
          detailMe({
            addressIP: `${addressIP}&&${getCanvasFingerprint()}&&${getWebGLFingerprint().renderer}`,
          })
        );
        dispatch(resetState());
      }
    };
    check();
  }, [decodedToken]);
  return (
    <>
      <Flex vertical>
        <Outlet style={{ flex: 1 }} />
      </Flex>
    </>
  );
};

export default Dashboard;
