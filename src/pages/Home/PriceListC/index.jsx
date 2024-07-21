/* eslint-disable quotes */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, ConfigProvider, Row, Table } from "antd";

/* eslint-disable quotes */
const PriceListCon = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  const dataSource1 = [
    {
      key: "1",
      name: ">500kg",
      age: "Liên hệ",
      address: "Liên hệ",
      four: "Liên hệ",
    },
    {
      key: "2",
      name: "200->500kg",
      age: "22.000đ ",
      address: "28.000đ",
      four: "28.000đ",
    },
    {
      key: "3",
      name: "100->200kg",
      age: "23.000đ ",
      address: "29.000đ",
      four: "29.000đ",
    },
    {
      key: "4",
      name: "30->100kg",
      age: "24.000đ",
      address: "30.000đ",
      four: "30.000đ",
    },
    {
      key: "5",
      name: "10->30kg",
      age: "	25.000đ",
      address: "31.000đ",
      four: "31.000đ",
    },
    {
      key: "6",
      name: "0->10kg",
      age: "26.000đ",
      address: "32.000đ",
      four: "32.000đ",
    },
  ];

  const columns = [
    {
      title: "TRỌNG LƯỢNG (TÍNH/KG)",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "HÀ NỘI",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "TP.HCM",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "ĐÀ NẴNG",
      dataIndex: "address",
      key: "address",
    },
  ];

  const dataSource2 = [
    {
      key: "1",
      name: "> 20m3",
      age: "Liên hệ",
      address: "Liên hệ",
      four: "Liên hệ",
    },
    {
      key: "2",
      name: "10m3 -> 20m3",
      age: "2.200.000đ",
      address: "2.700.000đ",
      four: "	2.700.000đ",
    },
    {
      key: "3",
      name: "5m3 -> 10m3",
      age: "	2.400.000đ",
      address: "	2.900.000đ",
      four: "2.900.000đ",
    },
    {
      key: "4",
      name: "< 5m3",
      age: "22.600.000đ",
      address: "	3.100.000đ",
      four: "	3.100.000đ",
    },
  ];

  const columns2 = [
    {
      title: "KHỐI LƯỢNG (TÍNH/M3)",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "HÀ NỘI",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "TP.HCM",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "ĐÀ NẴNG",
      dataIndex: "address",
      key: "address",
    },
  ];

  const dataSource3 = [
    {
      key: "1",
      name: "Từ 100kg – 200kg",
      age: "	15.000đ/kg",
      address: "21.000đ/kg",
      four: "21.000đ/kg",
    },
    {
      key: "2",
      name: "Từ 200kg – 500kg",
      age: "	14.000đ/kg",
      address: "20.000đ/kg",
      four: "	20.000đ/kg",
    },
    {
      key: "3",
      name: "Từ 500kg – 1 tấn",
      age: "13.000đ/kg",
      address: "19.000đ/kg",
      four: "19.000đ/kg",
    },
    {
      key: "4",
      name: "Từ 1 tấn – 2 tấn",
      age: "	12.000đ/kg",
      address: "	18.000đ/kg",
      four: "	18.000đ/kg",
    },
    {
      key: "5",
      name: "Trên 2 tấn",
      age: "9.000đ/kg",
      address: "14.000đ/kg",
      four: "14.000đ/kg",
    },
    {
      key: "6",
      name: "Trên 5 tấn",
      age: "Thương lượng",
      address: "Thương lượng",
      four: "	Thương lượng",
    },
  ];

  const dataSource4 = [
    {
      key: "1",
      name: "Từ 300kg – 500kg",
      age: "	10.000 đ/kg",
      address: "	13.000 đ/kg",
      four: "	13.000 đ/kg",
    },
    {
      key: "2",
      name: "Từ 500kg – 1 tấn",
      age: "	9.000 đ/kg",
      address: "12.000 đ/kg",
      four: "	12.000 đ/kg",
    },
    {
      key: "3",
      name: "Từ 1 tấn – 3 tấn",
      age: "7.000 đ/kg",
      address: "10.000 đ/kg",
      four: "11.000 đ/kg",
    },
  ];

  const columns3 = [
    {
      title: "CÂN NẶNG",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "HÀ NỘI",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "TP.HCM",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "ĐÀ NẴNG",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#ff8a70",
            borderColor: "#ff8a70",
            rowHoverBg: "#ffdad3",
          },
        },
      }}
    >
      <Row justify="center">
        <Col xs={24} lg={20}>
          <div style={{ marginTop: "180px" }}>
            <div>
              <h1>BẢNG GIÁ KÝ GỬI VẬN CHUYỂN TRUNG QUỐC &#8211; VIỆT NAM</h1>
              <p>&nbsp;</p>
              <h3>
                <em>1.Giá vận chuyển hàng tạp</em>
              </h3>
              <Table
                dataSource={dataSource1}
                columns={columns}
                pagination={false}
              />
              <Table
                style={{ marginTop: "30px" }}
                dataSource={dataSource2}
                columns={columns2}
                pagination={false}
              />
              <p>&nbsp;</p>
              <h3>
                <em>2.Giá vận chuyển hàng lô &gt;100kg (cùng 1 mặt hàng)</em>
              </h3>
              <Table
                style={{ marginTop: "30px" }}
                dataSource={dataSource3}
                columns={columns}
                pagination={false}
              />
              <ul>
                <li>
                  <em>
                    Lưu ý: Hàng lô là lô hàng chỉ có một mặt hàng được vận
                    chuyển về kho Trung tại một thời điểm với tổng cân đơn hàng
                    &gt; 150kg (Không áp dụng đối với các mặt hàng khó đi như
                    nước hoa, mỹ phẩm, thực phẩm&#8230; các mặt hàng nhạy cảm,
                    thuốc lá điện tử, fake….)
                  </em>
                </li>
              </ul>
              <p>
                <em>
                  <strong>
                    c. Bảng giá vận chuyển hàng nặng &#8211; gọn ( &gt; 300kg)
                    như ốc vít, đầu khóa, máy khoan, máy bơm, tay nắm cửa&#8230;
                  </strong>
                </em>
              </p>
              <Table
                style={{ marginTop: "30px" }}
                dataSource={dataSource4}
                columns={columns3}
                pagination={false}
              />
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
                      &#8211; Mọi mặt hàng đều có cân nặng thực tế và cân nặng
                      quy đổi.
                    </em>
                  </span>
                </div>
                <div>
                  <span style={{ color: "$000000" }}>
                    <em>
                      &#8211; Đối với những mặt hàng cồng kềnh thì khối lượng
                      đơn hàng sẽ được tính bằng công thức quy đổi.
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
                      <b>
                        VD: Đơn hàng có trọng lượng: 0.4kg sẽ tính đúng 0.4kg
                      </b>
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
                    phẩm, và về làm nhiều đợt thì hàng về tới đâu công ty sẽ
                    tính phí tới đó. Phí vận chuyển sẽ tính theo số hàng về của
                    khách trong một thời điểm chứ không tính theo tổng đơn hàng.
                  </em>
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
};
export default PriceListCon;
