/* eslint-disable quotes */
import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocale } from "antd/es/locale";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Col, Row, Space } from "antd";

const HomePage = () => {
  return (
    <Row justify="center">
      <Col xs={24} lg={20}>
        <div>
          <div>
            <a
              href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <span></span>
              <span>
                Tải về cho trình duyệt
                <b>Google chrome</b>
              </span>
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <span></span>
              <span>
                Tải về cho trình duyệt
                <b>Coccoc</b>
              </span>
            </a>
          </div>

          <div>
            <div>
              <h3 className="section-title section-title-center">
                <b></b>
                <span
                  className="section-title-main"
                  style={{ fontSize: "145%" }}
                >
                  QUY TRÌNH ĐẶT HÀNG
                </span>
                <b></b>
              </h3>
            </div>
            <div>
              <div>
                <div style={{ width: "60px" }}>
                  <div>
                    <div>
                      <img
                        decoding="async"
                        width="128"
                        height="128"
                        src="https://orderhangquangchau.com/wp-content/uploads/2022/10/search.png"
                        className="attachment-medium size-medium"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3>
                    TÌM KIẾM
                    <br />
                    SẢN PHẨM
                  </h3>
                </div>
                <IoChevronForward className="icon-quy-trinh" />
              </div>

              <div>
                <div style={{ width: "60px" }}>
                  <div>
                    <div>
                      <img
                        decoding="async"
                        width="300"
                        height="300"
                        src="https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo-300x300.png"
                        className="attachment-medium size-medium"
                        alt=""
                        srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo-150x150.png 150w, https://orderhangquangchau.com/wp-content/uploads/2022/10/cargo.png 512w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div id="text-4285712716">
                    <h3>
                      TẠO
                      <br />
                      ĐƠN HÀNG
                    </h3>
                  </div>
                  <IoChevronForward className="icon-quy-trinh" />
                </div>
              </div>

              <div>
                <div style={{ width: "60px" }}>
                  <div>
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width="300"
                        height="300"
                        src="https://orderhangquangchau.com/wp-content/uploads/2022/10/salary-300x300.png"
                        className="attachment-medium size-medium"
                        alt=""
                        srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/salary-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/10/salary-150x150.png 150w, https://orderhangquangchau.com/wp-content/uploads/2022/10/salary.png 512w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div id="text-3972050263">
                    <h3>
                      ĐẶT CỌC
                      <br />
                      TIỀN HÀNG
                    </h3>
                  </div>
                  <IoChevronForward className="icon-quy-trinh" />
                </div>
              </div>

              <div>
                <div style={{ width: "60px" }}>
                  <div>
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width="256"
                        height="256"
                        src="https://orderhangquangchau.com/wp-content/uploads/2022/10/delivery.png"
                        className="attachment-medium size-medium"
                        alt=""
                        srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/delivery.png 256w, https://orderhangquangchau.com/wp-content/uploads/2022/10/delivery-150x150.png 150w"
                        sizes="(max-width: 256px) 100vw, 256px"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div id="text-1166180467">
                    <h3>THEO DÕI ĐƠN HÀNG</h3>
                  </div>
                  <IoChevronForward className="icon-quy-trinh" />
                </div>
              </div>

              <div>
                <div style={{ width: "60px" }}>
                  <div>
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width="300"
                        height="300"
                        src="https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi-300x300.png"
                        className="attachment-medium size-medium"
                        alt=""
                        srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi-150x150.png 150w, https://orderhangquangchau.com/wp-content/uploads/2022/10/siparis_yonetimi.png 512w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div id="text-3579594028">
                    <h3>THANH TOÁN &amp; NHẬN HÀNG</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h3 className="section-title section-title-center">
                  <b></b>
                  <span
                    className="section-title-main"
                    style={{ fontSize: "116%" }}
                  >
                    DỊCH VỤ ĐẶT HÀNG TRUNG QUỐC CỦA CHÚNG TÔI
                  </span>
                  <b></b>
                </h3>
              </div>
              <div id="text-3378223356">
                <p>
                  Chọn ngay hệ thống website chất lượng, uy tín, đa dạng mặt
                  hàng với nhiều mẫu mã và giá cả hợp lí, vận chuyển nhanh
                  chóng, thanh toán tiện lợi
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div style={{ margin: "0px 0px 20px 0px" }}>
                    <div style={{ width: "107px" }}>
                      <div>
                        <div
                          style={{
                            borderWidth: "1px",
                            color: "rgb(2, 44, 190)",
                          }}
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://orderhangquangchau.com/wp-content/uploads/2022/09/cargo.jpg"
                            className="attachment-medium size-medium"
                            alt=""
                            srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/cargo.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/cargo-150x150.jpg 150w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3>Dịch vụ đặt hàng Quốc tế</h3>
                      <p>
                        Đó là những trở ngại mà bất cứ chủ cửa hàng, chủ shop,
                        doanh nhân nào muốn đặt hàng Quảng Châu hay bạn nào yêu
                        thích mua sắm đều có lúc gặp phải.
                      </p>
                    </div>
                  </div>

                  <div style={{ margin: "0px 0px 20px 0px" }}>
                    <div style={{ width: "107px" }}>
                      <div>
                        <div
                          style={{
                            borderWidth: "1px",
                            color: "rgb(2, 44, 190)",
                          }}
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://orderhangquangchau.com/wp-content/uploads/2022/09/group.jpg"
                            className="attachment-medium size-medium"
                            alt=""
                            srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/group.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/group-150x150.jpg 150w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3>Dịch vụ ký gửi hàng hóa</h3>
                      <p>
                        Order Kiều Nghĩa với hệ thống hoàn thiện, có thể track
                        lịch sử vận chuyển hàng hóa thuận tiện. Chúng tôi cam
                        kết và đảm bảo hàng hóa của quý khách sẽ về Việt Nam
                        trong thời gian nhanh nhất.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div style={{ margin: "0px 0px 20px 0px" }}>
                    <div style={{ width: "107px" }}>
                      <div>
                        <div
                          style={{
                            borderWidth: "1px",
                            color: "rgb(2, 44, 190)",
                          }}
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://orderhangquangchau.com/wp-content/uploads/2022/09/transportation.jpg"
                            className="attachment-medium size-medium"
                            alt=""
                            srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/transportation.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/transportation-150x150.jpg 150w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3>Vận chuyển hàng Trong nước và Quốc tế</h3>
                      <p>
                        Hãy để chúng tôi <strong>GIẢI QUYẾT</strong> những lo
                        lắng này của bạn, bằng dịch vụ nhận order vận chuyển
                        hàng từ Trung Quốc về Việt Nam.
                      </p>
                    </div>
                  </div>

                  <div style={{ margin: "0px 0px 20px 0px" }}>
                    <div style={{ width: "107px" }}>
                      <div>
                        <div
                          style={{
                            borderWidth: "1px",
                            color: "rgb(2, 44, 190)",
                          }}
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="300"
                            src="https://orderhangquangchau.com/wp-content/uploads/2022/09/cash-back.jpg"
                            className="attachment-medium size-medium"
                            alt=""
                            srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/cash-back.jpg 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/cash-back-150x150.jpg 150w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3>Chuyển tiền Trung Quốc</h3>
                      <p>
                        Dịch vụ đổi tiền, chuyển tiền Trung Quốc &#8211; Việt
                        Nam &#8211; Tỷ giá nhân dân tệ (CNY-RMB) an toàn, uy
                        tín, nhanh chóng hàng đầu Việt Nam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3>
                <b></b>
                <span style={{ fontSize: "140%" }}>
                  Công cụ đặt hàng taobao, 1688 trên Chrome
                </span>
                <b></b>
              </h3>
            </div>

            <div>
              <p>
                Chúng tôi tạo ra những công cụ hỗ trợ giúp cho việc đặt hàng,
                quản lý đơn hàng trở nên vô cùng tiện lợi và nhanh chóng
              </p>
            </div>

            <div>
              <div>
                <strong>Cài đặt công cụ đặt hàng</strong>
                <a
                  href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span></span>
                  <span>
                    Tải về cho trình duyệt <b>Google chrome</b>
                  </span>
                </a>
                <a
                  href="https://chrome.google.com/webstore/detail/tool-order-h%C3%A0ng-qu%E1%BA%A3ng-ch%C3%A2/hgiaoallflpjbfaheamijjllodfacmlb?authuser=4&amp;fbclid=IwAR2i1KlcQh5scVfTFKx1ZwAu_iNDtUe0qzJqyKKfu4jutXH1fszwBk3NF-8"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span></span>
                  <span>
                    Tải về cho trình duyệt
                    <br />
                    <b>Cốc cốc</b>
                  </span>
                </a>
              </div>

              <div
                id="col-1759922342"
                className="col hide-for-small medium-5 small-12 large-5"
              >
                <div>
                  <div id="image_1637346913">
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="500"
                        src="https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505.png"
                        className="attachment-large size-large"
                        alt=""
                        srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505.png 500w, https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505-300x300.png 300w, https://orderhangquangchau.com/wp-content/uploads/2022/09/2822505-150x150.png 150w"
                        sizes="(max-width: 500px) 100vw, 500px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="700"
                height="575"
                src="https://orderhangquangchau.com/wp-content/uploads/2022/09/2108.i039.023.F.m004.c9.png"
                className="attachment-original size-original"
                alt=""
                srcSet="https://orderhangquangchau.com/wp-content/uploads/2022/09/2108.i039.023.F.m004.c9.png 700w, https://orderhangquangchau.com/wp-content/uploads/2022/09/2108.i039.023.F.m004.c9-300x246.png 300w"
                sizes="(max-width: 700px) 100vw, 700px"
              />
            </div>

            <div>
              <div>
                <h3>
                  <span>BẢNG GIÁ NHẬP HÀNG QUỐC TẾ</span>
                  <b></b>
                </h3>
              </div>
              <p>
                <i>
                  Order Kiều Nghĩa vận chuyển thông qua đường chính ngạch, vận
                  chuyển nhanh nhất và giá rẻ nhất thị trường
                </i>
              </p>
              <div>
                <div>
                  <Link to={"/bang-gia"}>
                    <IoStarOutline />
                    <span>Bảng giá đặt hàng</span>
                  </Link>
                </div>

                <div>
                  <Link to={"/bang-gia-ky-gui-hang"}>
                    <IoStarOutline />
                    <span>Bảng giá ký gửi vận chuyển</span>
                  </Link>
                </div>

                <div>
                  <Link to={"/bang-gia-ky-gui-hang"}>
                    <IoStarOutline />
                    <span>Bảng giá vận chuyển hàng lô, hàng nặng</span>
                  </Link>
                </div>

                <div>
                  <Link
                    to={
                      "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung"
                    }
                  >
                    <IoStarOutline />
                    <span>Bảng giá dịch vụ chuyển tiền</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <section className="section" id="section_1830649247">
              <div className="bg section-bg fill bg-fill  ">
                <div className="section-bg-overlay absolute fill"></div>
              </div>

              <div className="section-content relative">
                <div className="row" id="row-651700250">
                  <div id="col-1867579880" className="col small-12 large-12">
                    <div >
                      <div>
                        <h3 className="section-title section-title-center">
                          <b></b>
                          <span
                            className="section-title-main"
                            style={{
                              fontSize: "145%",
                              color: "rgb(255, 255, 255)",
                            }}
                          >
                            CHÚNG TÔI MANG ĐẾN DỊCH VỤ HOÀN HẢO
                          </span>
                          <b></b>
                        </h3>
                      </div>
                      <div id="text-3856796213" className="text mb-10">
                        <p style={{ textAlign: "center" }}>
                          <em>
                            Nhằm mang đến cho quý khách hàng dịch vụ nhập hàng
                            tốt nhất, chúng tôi luôn nỗ lực cải tiền không ngừng
                            nhằm nâng cao chất lượng phục vụ , đem đến sự hài
                            lòng cho khách hàng sử dụng dịch vụ của chúng tôi !
                          </em>
                        </p>
                      </div>

                      <div className="row" id="row-921310836">
                        <div
                          id="col-291873013"
                          
                        >
                          <div >
                            <div id="text-364852867" >
                              <h3>CAM KẾT ĐẶT HÀNG</h3>
                              <p>
                                Đền bù 100% tiền hàng nếu Order Kiều Nghĩa
                                đặt sai link của quý khách. Cam kết mua hàng
                                trong vòng 24h kể từ lúc đơn hàng được đặt cọc.
                              </p>
                            </div>

                            <div id="text-1243076793" className="text mb-10">
                              <h3>CAM KẾT ĐÚNG GIÁ</h3>
                              <p>
                                Order Kiều Nghĩa cam kết mua đúng giá sản
                                phẩm trên website và đúng phí nội địa trên web
                                không gian dối.
                              </p>
                            </div>

                            <div id="text-106027912" className="text mb-10">
                              <h3>TỶ GIÁ NHÂN DÂN TỆ</h3>
                              <p>
                                Tỷ giá công khai minh bạch khớp với hệ thống đặt
                                hàng. Luôn luôn ưu tiên để tỷ giá thấp nhất nhằm
                                mang lại lợi ích tối đa cho khách hàng.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          id="col-803516683"
                          
                        >
                          <div >
                            <div id="text-1823006879" >
                              <h3>CAM KẾT BỒI THƯỜNG</h3>
                              <p>
                                Chúng tôi cam kết đền bù 100% tiền hàng nếu
                                trong quá trình vận chuyển hàng hóa bị thất lạc.
                              </p>
                            </div>

                            <div id="text-857278749" className="text mb-10">
                              <h3>THỜI GIAN VẬN CHUYỂN</h3>
                              <p>
                                Order Kiều Nghĩa luôn luôn cố gắng tối ưu
                                từng công đoạn để hàng hóa của quý khách về
                                nhanh nhất, an toàn nhất có thể.
                              </p>
                            </div>

                            <div id="text-4026335512" className="text mb-10">
                              <h3>CAM KẾT HỖ TRỢ</h3>
                              <p>
                                Order Kiều Nghĩa luôn luôn cố gắng phục vụ
                                24/7 nhằm mang lại dịch vụ tốt nhất tới quý
                                khách hàng.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        </div>
      </Col>
    </Row>
  );
};

export default HomePage;
