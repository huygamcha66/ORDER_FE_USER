/* eslint-disable quotes */
import { useEffect } from 'react'
import './index.css'
import { useLocation } from 'react-router-dom'
import { Col, ConfigProvider, Row, Table } from 'antd'

const PriceList = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location])

  const dataSource1 = [
    {
      key: '1',
      name: 'Dưới 2 triệu',
      age: '	3%  ',
      address: '	70%'
    },
    {
      key: '2',
      name: 'Từ 2 đến 20 triệu',
      age: '2.5%  ',
      address: '	70%'
    },
    {
      key: '3',
      name: 'Từ 20 đến 100 triệu',
      age: '2% ',
      address: '	70%'
    },
    {
      key: '4',
      name: 'Trên 100 triệu',
      age: '	1%  ',
      address: '	70%'
    }
  ]

  const columns = [
    {
      title: 'Giá trị đơn hàng',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '	Phí dịch vụ',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Đặt cọc',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  const dataSource2 = [
    {
      key: '1',
      name: 'Dưới 50kg',
      age: '24.000 đ/kg',
      address: '30.000 đ/kg',
      four: '30.000 đ/kg'
    },
    {
      key: '2',
      name: ' 50-200 kg',
      age: '23.000 đ/kg',
      address: '29.000 đ/kg',
      four: '	29.000 đ/kg'
    },
    {
      key: '3',
      name: '200-500 kg',
      age: '22.000 đ/kg',
      address: '28.000 đ/kg',
      four: '28.000 đ/kg'
    },
    {
      key: '4',
      name: 'Trên 500kg',
      age: 'Thương lượng',
      address: 'Thương lượng',
      four: 'Thương lượng'
    }
  ]

  const columns2 = [
    {
      title: 'Cân nặng',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Hà Nội',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Sài Gòn',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Đà Nẵng',
      dataIndex: 'four',
      key: 'four'
    }
  ]

  const dataSource3 = [
    {
      key: '1',
      name: 'Từ 100kg – 300kg',
      age: '15.000 đ/kg',
      address: '18.000 đ/kg',
      four: '18.000 đ/kg'
    },
    {
      key: '2',
      name: ' Từ 300kg – 500kg',
      age: '14.000 đ/kg',
      address: '17.000 đ/kg',
      four: '	17.000 đ/kg'
    },
    {
      key: '3',
      name: 'Từ 500kg – 1 tấn',
      age: '12.000 đ/kg',
      address: '15.000 đ/kg',
      four: '15.000 đ/kg'
    },
    {
      key: '4',
      name: ' Trên 1 tấn',
      age: 'Thương lượng',
      address: 'Thương lượng',
      four: 'Thương lượng'
    }
  ]
  const dataSource4 = [
    {
      key: '1',
      name: 'Từ 300kg – 500kg',
      age: '9.000 đ/kg',
      address: '12.000 đ/kg',
      four: '12.000 đ/kg'
    },
    {
      key: '2',
      name: 'Từ 500kg – 1 tấn',
      age: '8.000 đ/kg',
      address: '11.000 đ/kg',
      four: '	11.000 đ/kg'
    },
    {
      key: '3',
      name: 'Từ 1 tấn – 3 tấn',
      age: '6.000 đ/kg',
      address: '9.000 đ/kg',
      four: '10.000 đ/kg'
    },
    {
      key: '4',
      name: ' Trên 3 tấn',
      age: 'Thương lượng',
      address: 'Thương lượng',
      four: 'Thương lượng'
    }
  ]

  const dataSource5 = [
    {
      key: '1',
      name: '501 – 10000 sản phẩm',
      age: '		1.000đ  ',
      address: '		800đ'
    },
    {
      key: '2',
      name: '101 – 500 sản phẩm',
      age: '		1.500đ ',
      address: '	1.000đ'
    },
    {
      key: '3',
      name: '21 – 100 sản phẩm',
      age: '2.000đ ',
      address: '1.500đ'
    },
    {
      key: '4',
      name: '6 – 20 sản phẩm',
      age: '3.000đ ',
      address: '2.000đ'
    },
    {
      key: '5',
      name: '1 – 5 sản phẩm',
      age: '5.000đ',
      address: '2.500đ'
    }
  ]

  const columns5 = [
    {
      title: 'SỐ LƯỢNG SP/ĐƠN LỚN',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '	MỨC THU PHÍ (NGHÌN/1 SP)',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '	MỨC THU PHÍ SP PHỤ KIỆN (GIÁ SP <10 TỆ)',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: '#ff8a70',
            borderColor: '#ff8a70',
            rowHoverBg: '#ffdad3'
          }
        }
      }}
    >
      <Row justify="center">
        <Col xs={24} lg={20}>
          <div>
            <h2>
              <span style={{ color: '#555555', fontSize: '14.4px' }}></span>
            </h2>
            <div>
              <h1>
                <strong>BẢNG GIÁ DỊCH VỤ</strong>
              </h1>
              <p>
                <span style={{ color: '#000000' }}>
                  <strong>1. Phí Order</strong>
                </span>
              </p>
              <Table dataSource={dataSource1} columns={columns} pagination={false} />
              <p>
                <strong>2. Phí vận chuyển Trung Quốc &#8211; Việt Nam</strong>
              </p>
              <p>
                <em>
                  <strong>
                    a. Bảng giá vận chuyển hàng tạp, hàng order Taobao, 1688, pinduoduo
                  </strong>
                </em>
              </p>
              <Table dataSource={dataSource2} columns={columns2} pagination={false} />
              <p>
                <em>
                  <strong>b. Bảng giá vận chuyển hàng lô &gt; 100kg (Cùng 1 mặt hàng)</strong>
                </em>
              </p>
              <Table dataSource={dataSource3} columns={columns2} pagination={false} />
              <p>
                <em>
                  <strong>
                    c. Bảng giá vận chuyển hàng nặng &#8211; gọn ( &gt; 300kg) như ốc vít, đầu khóa,
                    máy khoan, máy bơm, tay nắm cửa&#8230;
                  </strong>
                </em>
              </p>
              <Table dataSource={dataSource4} columns={columns2} pagination={false} />
              <p>
                <strong>3. Phí kiểm đếm (Tuỳ chọn theo nhu cầu)</strong>
              </p>
            </div>
            <Table dataSource={dataSource5} columns={columns5} pagination={false} />
            <div className="cate_cont">
              <p>
                <b>Lưu ý:</b>
              </p>
              <ul>
                <li>
                  1. Order Kiều Nghĩa sẽ kiểm tra hàng khi nhận được tại kho Trung Quốc theo số
                  lượng và các thuộc tính cơ bản phân loại hàng hóa mà khách hàng đã thao tác chọn
                  khi đưa vào giỏ hàng (đối với hàng thời trang thường là thuộc tính size, màu sắc
                  nhưng loại trừ trường hợp màu sắc sản phẩm thực tế có thể đậm/nhạt hơn so với màu
                  sắc sản phẩm đăng bán trên website)
                </li>
                <li>
                  2. Order Kiều Nghĩa không cam kết sẽ kiểm tra chất liệu, thông số kỹ thuật, chất
                  lượng sản phẩm, thương hiệu sản phẩm. Ví dụ với mặt hàng thời trang: bộ phận kiểm
                  hàng không thể kiểm được từng đường may, mũi chỉ, hoặc chất lượng vải&#8230; vấn
                  đề đó thuộc về nhà bán, khách hàng tìm kiếm và chọn lọc những nhà bán uy tín để
                  nhập hàng. Tuy nhiên, OrdeOrder Kiều Nghĩa có trách nhiệm hỗ trợ khiếu nại yêu cầu
                  shop đền bù nếu hàng không được đảm bảo chất lượng như khách mong muốn.
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  )
}
export default PriceList
