/* eslint-disable quotes */
import { Col, Row, Space } from 'antd'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PolicyPage = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location])
  return (
    <Row justify="center">
      <Col xs={24} lg={20}>
        <div>
          <h1>Chính sách bảo mật</h1>
          <p>
            Với mục tiêu tôn trọng và bảo vệ quyền lợi của khách hàng, nhằm đem lại cho Quý khách
            một trải nghiệm mua sắm an toàn, thoải mái và xây dựng niềm tin đối với Order Kiều
            Nghĩa, chúng tôi cam kết tuân thủ chính xác và đầy đủ các chính sách bảo mật dữ liệu
            khách hàng với những nội dung cụ thể dưới đây:
          </p>

          <h2>Mục đích, phạm vi thu thập và sử dụng thông tin</h2>
          <p>
            Các thông tin bắt buộc mà Order Kiều Nghĩa cần khi Quý khách đăng ký thành viên trên
            website của chúng tôi bao gồm: tên đăng nhập, email, số điện thoại, địa chỉ, mật khẩu
            đăng nhập.
          </p>
          <p>
            Trong quá trình giao dịch tại website tatcadichvu.com chúng tôi chỉ lưu trữ thông tin
            chi tiết về đơn hàng đã thanh toán. Ngoài ra, các thông tin về tài khoản ngân hàng của
            Quý khách sẽ không được lưu trữ.
          </p>

          <h2>Chính sách bảo vệ dữ liệu khách hàng khi mua hàng tại Order hàng Quảng Châu</h2>
          <p>
            Quý khách sẽ chịu trách nhiệm bảo mật và lưu trữ mọi hoạt động sử dụng dưới tên đăng ký,
            mật khẩu và hộp thư điện tử của mình, đồng thời có trách nhiệm thông báo kịp thời cho
            Order Kiều Nghĩa về hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật của bên thứ ba
            để có phương án giải quyết phù hợp.
          </p>

          <p>Chúng tôi sử dụng thông tin Quý khách cung cấp để:</p>
          <ul>
            <li>Cung cấp dịch vụ và gửi các thông báo cần thiết đến Quý khách.</li>
            <li>Ngăn chặn hành vi giả mạo hoặc phá hủy tài khoản người dùng.</li>
            <li>Liên lạc và hỗ trợ Quý khách trong những trường hợp đặc biệt.</li>
          </ul>

          <p>
            Trường hợp có yêu cầu của pháp luật, chúng tôi có trách nhiệm hợp tác cung cấp thông tin
            cá nhân thành viên với các cơ quan tư pháp bao gồm Viện kiểm sát, Tòa án, Cơ quan điều
            tra liên quan đến hành vi vi phạm pháp luật. Ngoài ra, không ai có quyền xâm phạm thông
            tin cá nhân của thành viên.
          </p>

          <h2>Thời gian lưu trữ thông tin</h2>
          <p>
            Dữ liệu cá nhân của Quý khách sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ. Trong các
            trường hợp còn lại, thông tin cá nhân thành viên sẽ được Order Kiều Nghĩa lưu trữ và bảo
            mật.
          </p>

          <h2>Cam kết bảo mật</h2>

          <h3>Bảo mật thông tin cá nhân</h3>
          <p>Chúng tôi cam kết bảo mật thông tin khách hàng, cụ thể như sau:</p>
          <ul>
            <li>
              Thông tin cá nhân của thành viên trên tatcadichvu.com được Order Kiều Nghĩa cam kết
              bảo mật tuyệt đối theo chính sách. Việc thu thập và sử dụng thông tin cá nhân của mỗi
              thành viên chỉ được thực hiện khi có sự đồng ý của thành viên đó trừ trường hợp pháp
              luật có quy định khác.
            </li>
            <li>
              Không chuyển giao, cung cấp cho bên thứ ba về thông tin cá nhân của thành viên khi
              không có sự cho phép của thành viên.
            </li>
            <li>
              Trường hợp cung cấp thông tin cho bên thứ ba theo yêu cầu của pháp luật hoặc có sự
              đồng ý của thành viên, chúng tôi yêu cầu bên thứ ba cam kết tuân thủ đầy đủ chính sách
              về bảo mật thông tin đã được quy định.
            </li>
            <li>Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của thành viên.</li>
            <li>
              Ban quản lý Order Kiều Nghĩa yêu cầu cá nhân khi đăng ký thành viên phải cung cấp đầy
              đủ, chính xác các thông tin bắt buộc như họ tên, địa chỉ liên hệ, email, số điện
              thoại… và chịu trách nhiệm về tính pháp lý của những thông tin trên. Chúng tôi không
              chịu trách nhiệm cũng như không giải quyết mọi khiếu nại liên quan đến quyền lợi của
              thành viên nếu xét thấy thông tin mà thành viên đó cung cấp ban đầu là không chính
              xác.
            </li>
          </ul>

          <h3>Bảo mật thông tin nguồn hàng</h3>
          <p>
            Order Kiều Nghĩa cam kết bảo mật tuyệt đối thông tin nguồn hàng của Quý khách. Các hành
            vi tiết lộ nguồn hàng của Quý khách cho đối thủ cạnh tranh từ bất kì nhân sự nào của
            chúng tôi đều bị nghiêm cấm và có biện pháp xử lý thỏa đáng.
          </p>

          <p>
            Order Kiều Nghĩa chỉ sử dụng thông tin liên quan đến nguồn hàng của Quý khách vào mục
            đích thống kê tổng quan thị trường của riêng chúng tôi bên cạnh việc nâng cao chất lượng
            dịch vụ dành cho Quý khách. Chính vì thế, khi đã có chính sách bảo mật thông tin khách
            hàng bảo vệ, hy vọng khách hàng có thể cung cấp đúng và đủ những thông tin cần thiết khi
            tham gia giao dịch mua hàng, order hàng Trung Quốc tại tatcadichvu.com.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default PolicyPage
