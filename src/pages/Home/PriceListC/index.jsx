/* eslint-disable quotes */
import { useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { Col, Row } from "antd";

/* eslint-disable quotes */
const PriceListCon = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <Row justify="center">
      <Col xs={24} lg={20}>
        <div style={{ marginTop: "180px" }}>
          <div className="entry-content single-page">
            <h1 className="title-page">
              BẢNG GIÁ KÝ GỬI VẬN CHUYỂN TRUNG QUỐC &#8211; VIỆT NAM
            </h1>
            <p>&nbsp;</p>
            <h3>
              <em>1.Giá vận chuyển hàng tạp</em>
            </h3>
            <table
              className="uk-table uk-table-hover uk-table-striped uk-table-condensed"
              style={{ width: "21.4919%" }}
            >
              <thead>
                <tr>
                  <th style={{ width: "47.5248%" }}>Trọng lượng (tính/kg)</th>
                  <th style={{ width: "24.7525%" }}>Hà Nội</th>
                  <th style={{ width: "24.7525%" }}>TP.HCM</th>
                  <th style={{ width: "24.7525%" }}>Đà Nẵng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "47.5248%" }}>&gt;500kg</td>
                  <td style={{ width: "24.7525%" }}>Liên hệ</td>
                  <td style={{ width: "24.7525%" }}>Liên hệ</td>
                  <td style={{ width: "24.7525%" }}>Liên hệ</td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>200-&gt;500kg</td>
                  <td style={{ width: "24.7525%" }}>
                    22.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    28.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    28.000<sup>đ</sup>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>100-&gt;200kg</td>
                  <td style={{ width: "24.7525%" }}>
                    23.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    29.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    29.000<sup>đ</sup>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>30-&gt;100kg</td>
                  <td style={{ width: "24.7525%" }}>
                    24.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    30.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    30.000<sup>đ</sup>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>10-&gt;30kg</td>
                  <td style={{ width: "24.7525%" }}>
                    25.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    31.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    31.000<sup>đ</sup>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>0-&gt;10kg</td>
                  <td style={{ width: "24.7525%" }}>
                    26.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    32.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    32.000<sup>đ</sup>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "120.678%" }} colSpan="11">
                    Khối lượng (tính/m<sup>3</sup>)
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>&gt; 20m3</td>
                  <td style={{ width: "24.7525%" }}>Liên hệ</td>
                  <td style={{ width: "24.7525%" }}>Liên hệ</td>
                  <td style={{ width: "24.7525%" }}>Liên hệ</td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>10m3 -&gt; 20m3</td>
                  <td style={{ width: "24.7525%" }}>
                    2.200.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    2.700.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    2.700.000<sup>đ</sup>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>5m3 -&gt; 10m3</td>
                  <td style={{ width: "24.7525%" }}>
                    2.400.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    2.900.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    2.900.000<sup>đ</sup>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "47.5248%" }}>&lt; 5m3</td>
                  <td style={{ width: "24.7525%" }}>
                    2.600.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    3.100.000<sup>đ</sup>
                  </td>
                  <td style={{ width: "24.7525%" }}>
                    3.100.000<sup>đ</sup>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
            <h3>
              <em>2.Giá vận chuyển hàng lô &gt;100kg (cùng 1 mặt hàng)</em>
            </h3>
            <table className="mys-table">
              <thead>
                <tr>
                  <th>Trọng lượng</th>
                  <th>Hà Nội</th>
                  <th>TP.HCM</th>
                  <th>Đà Nẵng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Từ 100kg &#8211; 200kg</td>
                  <td>
                    15.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    21.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    21.000<sup>đ/kg</sup>
                  </td>
                </tr>
                <tr>
                  <td>Từ 200kg &#8211; 500kg</td>
                  <td>
                    14.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    20.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    20.000<sup>đ/kg</sup>
                  </td>
                </tr>
                <tr>
                  <td>Từ 500kg &#8211; 1 tấn</td>
                  <td>
                    13.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    19.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    19.000<sup>đ/kg</sup>
                  </td>
                </tr>
                <tr>
                  <td>Từ 1 tấn &#8211; 2 tấn</td>
                  <td>
                    12.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    18.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    18.000<sup>đ/kg</sup>
                  </td>
                </tr>
                <tr>
                  <td>Trên 2 tấn</td>
                  <td>
                    9.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    14.000<sup>đ/kg</sup>
                  </td>
                  <td>
                    14.000<sup>đ/kg</sup>
                  </td>
                </tr>
                <tr>
                  <td>Trên 5 tấn</td>
                  <td>Thương lượng</td>
                  <td>Thương lượng</td>
                  <td>Thương lượng</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                <em>
                  Lưu ý: Hàng lô là lô hàng chỉ có một mặt hàng được vận chuyển
                  về kho Trung tại một thời điểm với tổng cân đơn hàng &gt;
                  150kg (Không áp dụng đối với các mặt hàng khó đi như nước hoa,
                  mỹ phẩm, thực phẩm&#8230; các mặt hàng nhạy cảm, thuốc lá điện
                  tử, fake….)
                </em>
              </li>
            </ul>
            <p>
              <em>
                <strong>
                  c. Bảng giá vận chuyển hàng nặng &#8211; gọn ( &gt; 300kg) như
                  ốc vít, đầu khóa, máy khoan, máy bơm, tay nắm cửa&#8230;
                </strong>
              </em>
            </p>
            <table
              className="pc-table"
              style={{ width: "49.2489%", height: "105px" }}
            >
              <thead>
                <tr style={{ height: "21px" }}>
                  <td style={{ height: "21px", width: "29.3981%" }}>
                    <strong> Cân nặng</strong>
                  </td>
                  <td style={{ height: "21px", width: "23.5775%" }}>
                    <strong>Hà Nội</strong>
                  </td>
                  <td style={{ height: "21px", width: "23.8257%" }}>
                    <strong>Sài Gòn</strong>
                  </td>
                  <td style={{ height: "21px", width: "24.5414%" }}>
                    <strong>Đà Nẵng</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: "21px" }}>
                  <td style={{ height: "21px", width: "29.3981%" }}>
                    Từ 300kg &#8211; 500kg
                  </td>
                  <td style={{ height: "21px", width: "23.5775%" }}>
                    <strong>10.000 đ/kg</strong>
                  </td>
                  <td style={{ height: "21px", width: "23.8257%" }}>
                    <strong>13.000 đ/kg</strong>
                  </td>
                  <td style={{ height: "21px", width: "24.5414%" }}>
                    <strong>13.000 đ/kg</strong>
                  </td>
                </tr>
                <tr style={{ height: "21px" }}>
                  <td style={{ height: "21px", width: "29.3981%" }}>
                    Từ 500kg &#8211; 1 tấn
                  </td>
                  <td style={{ height: "21px", width: "23.5775%" }}>
                    <strong>9.000 đ/kg</strong>
                  </td>
                  <td style={{ height: "21px", width: "23.8257%" }}>
                    <strong>12.000 đ/kg</strong>
                  </td>
                  <td style={{ height: "21px", width: "24.5414%" }}>
                    <strong>12.000 đ/kg</strong>
                  </td>
                </tr>
                <tr style={{ height: "21px" }}>
                  <td style={{ height: "21px", width: "29.3981%" }}>
                    Từ 1 tấn &#8211; 3 tấn
                  </td>
                  <td style={{ height: "21px", width: "23.5775%" }}>
                    <strong>7.000 đ/kg</strong>
                  </td>
                  <td style={{ height: "21px", width: "23.8257%" }}>
                    <strong>10.000 đ/kg</strong>
                  </td>
                  <td style={{ height: "21px", width: "24.5414%" }}>
                    <strong>11.000 đ/kg</strong>
                  </td>
                </tr>
                <tr style={{ height: "21px" }}>
                  <td style={{ height: "21px", width: "29.3981%" }}>
                    <strong> Trên 3 tấn</strong>
                  </td>
                  <td style={{ height: "21px", width: "23.5775%" }}>
                    <em>Thương lượng</em>
                  </td>
                  <td style={{ height: "21px", width: "23.8257%" }}>
                    <em>Thương lượng</em>
                  </td>
                  <td style={{ height: "21px", width: "24.5414%" }}>
                    <em>Thương lượng</em>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
            <p>
              <span style={{ color: "$000000" }}>
                <em>
                  <b>Lưu ý:</b>
                </em>
              </span>
            </p>
            <ol type="a">
              <li style={{ listStyleType: "none" }}>
                <ol type="a">
                  <li>
                    <span style={{ color: "$000000" }}>
                      <em>Cân nặng quy đổi</em>
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div>
              <div>
                <span style={{ color: "$000000" }}>
                  <em>
                    &#8211; Mọi mặt hàng đều có cân nặng thực tế và cân nặng quy
                    đổi.
                  </em>
                </span>
              </div>
              <div>
                <span style={{ color: "$000000" }}>
                  <em>
                    &#8211; Đối với những mặt hàng cồng kềnh thì khối lượng đơn
                    hàng sẽ được tính bằng công thức quy đổi.
                  </em>
                </span>
              </div>
              <div>
                <span style={{ color: "$000000" }}>
                  <em>
                    &#8211; Khối lượng quy đổi được tính theo công thức:
                    <b>
                      Chiều dài * chiều rộng * chiều cao / 6000 = Cân nặng đơn
                      hàng
                    </b>
                  </em>
                </span>
              </div>
              <div>
                <span style={{ color: "$000000" }}>
                  <em>
                    &#8211; Cân nặng được áp dụng là mức cân nặng cao hơn của
                    trọng lượng thực và khối lượng quy đổi.
                  </em>
                </span>
              </div>
            </div>
            <ol type="a">
              <li style={{ listStyleType: "none" }}>
                <ol type="a">
                  <li>
                    <span style={{ color: "$000000" }}>
                      <em>Quy tắc làm tròn</em>
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div>
              <div>
                <span style={{ color: "$000000" }}>
                  <em>
                    &#8211; Order Kiều Nghĩa ko áp dụng làm tròn, cân nặng sẽ
                    được tính chính xác tới 0.1kg
                  </em>
                </span>
              </div>
              <div>
                <span style={{ color: "$000000" }}>
                  <em>
                    <b>VD: Đơn hàng có trọng lượng: 0.4kg sẽ tính đúng 0.4kg</b>
                  </em>
                </span>
              </div>
            </div>
            <ol type="a">
              <li style={{ listStyleType: "none" }}>
                <ol type="a">
                  <li>
                    <span style={{ color: "$000000" }}>
                      <em>Tính giá vận chuyển khi hàng về</em>
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div>
              <span style={{ color: "$000000" }}>
                <em>
                  Khách hàng chú ý, với đơn hàng của quý khách gồm nhiều sản
                  phẩm, và về làm nhiều đợt thì hàng về tới đâu công ty sẽ tính
                  phí tới đó. Phí vận chuyển sẽ tính theo số hàng về của khách
                  trong một thời điểm chứ không tính theo tổng đơn hàng.
                </em>
              </span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default PriceListCon;
