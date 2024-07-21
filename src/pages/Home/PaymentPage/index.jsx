/* eslint-disable quotes */
// eslint-disable-next-line semi
import { Col, Image, Row } from "antd";
import "./index.css";
/* eslint-disable quotes */
const PaymentPage = () => {
  return (
    <Row justify="center" className="payment_wrapper">
      <Col xs={20}>
        <div style={{ margin: "0px auto 20px auto" }}>
          <h2>
            Thông tin chuyển khoản (Gọi đến hotline 0703414511 để được hỗ trợ )
          </h2>
          <Image
            width={350}
            src="https://pub-50bb58cfabdd4b93abb4e154d0eada9e.r2.dev/1716528483553.png"
          />
        </div>
      </Col>
    </Row>
  );
};
export default PaymentPage;
