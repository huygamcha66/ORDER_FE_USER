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
      <Space
        style={{
          display: "flex",
          marginTop: "220px",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Space>
      <Footer />
    </div>
  );
};

export default Home;
