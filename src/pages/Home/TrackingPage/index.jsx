/* eslint-disable quotes */
// eslint-disable-next-line semi
import { useLocation } from "react-router-dom";
import "../TrackingPage/index.css";
import { useEffect } from "react";
import { Col, Row } from "antd";
const TrackingPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <Row justify="center">
      <Col xs={24} lg={20}>
        <div style={{ height: "100vh" }}>
          <div>
            <p>
              <strong>
                Bạn cần nhập vào mã vận đơn để tra cứu trạng thái của vận đơn.
              </strong>
            </p>
            <input
              type="text"
              name="code"
              value=""
              placeholder="Nhập vào mã đơn hàng"
            ></input>
            <button type="submit" id="btn_tracking" className="">
              Tra cứu đơn hàng
              <img src="https://orderhangquangchau.com/wp-content/themes/flatsome-child/images/ic1-1.png"></img>
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default TrackingPage;
