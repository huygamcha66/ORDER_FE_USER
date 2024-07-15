/* eslint-disable quotes */
/* eslint-disable semi */
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import HeaderScreen from "../../components/Header";
import { Space } from "antd";

const Home = () => {
  return (
    <div>
      <HeaderScreen />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Home;
