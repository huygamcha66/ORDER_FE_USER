/* eslint-disable quotes */
/* eslint-disable semi */
import { Helmet } from "react-helmet";
import ExtraFooter from "../../components/ExtraFooter/ExtraFooter";
import ExtraHeader from "../../components/ExtraHeader/ExtraHeader";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../redux/userSlice/userSlice";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";
import Footer from "../../components/Footer/Footer";
import HeaderScreen from "../../components/Header";
import { Flex, Space } from "antd";

const Dashboard = () => {
  // const user = useSelector(selectCurrentUser);
  return (
    <>
      <Flex vertical>
        <ExtraHeader />
        <Outlet style={{ flex: 1 }} />
        <Footer />
      </Flex>
    </>
  );
};

export default Dashboard;
