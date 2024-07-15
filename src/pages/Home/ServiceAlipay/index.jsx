/* eslint-disable quotes */
import { Col, Row } from "antd";
import { useEffect } from "react";
import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";
import { useLocation } from "react-router-dom";

/* eslint-disable quotes */
const ServiceAlipay = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <Row justify="center">
      <Col xs={24} lg={20}>
        <div style={{ marginTop: "180px" }}>
          <div className="article-inner has-shadow box-shadow-1">
            <header className="entry-header">
              <div className="entry-header-text entry-header-text-top text-left">
                <h6 className="entry-category is-xsmall">
                  <a
                    href="https://orderhangquangchau.com/category/tin-tuc"
                    rel="category tag"
                  >
                    Tin tức
                  </a>
                </h6>

                <h1 className="entry-title">
                  Dịch vụ nạp tiền Alipay, thanh toán tiền Trung Quốc, chuyển
                  tiền Trung
                </h1>
                <div className="entry-divider is-divider small"></div>

                <div className="entry-meta uppercase is-xsmall">
                  <span className="posted-on">
                    Posted on
                    <a
                      href="https://orderhangquangchau.com/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung.html"
                      rel="bookmark"
                    >
                      <time
                        className="entry-date published"
                        dateTime="2022-09-21T09:08:34+00:00"
                      >
                        September 21, 2022
                      </time>
                      <time
                        className="updated"
                        dateTime="2022-11-14T02:23:23+00:00"
                      >
                        November 14, 2022
                      </time>
                    </a>
                  </span>
                  <span className="byline">
                    by
                    <span className="meta-author vcard">
                      <a
                        className="url fn n"
                        href="https://orderhangquangchau.com/author/admin-orderqc"
                      >
                        admin.orderQC
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </header>
            <div className="entry-content single-page">
              <h3
                id="CachquydoitienVietNam sangTrungQuoc (VND&gt;&gt;CNY,RMB)"
                className="rtejustify"
                style={{
                  boxSizing: "border-box",
                  color: "#444444",
                  width: "777px",
                  margin: "25px 0px 15px",
                  textRendering: "optimizeSpeed",
                  fontSize: "18px",
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: "bold",
                  fontStyle: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  letterSpacing: "normal",
                  orphans: 2,
                  textIndent: "0px",
                  textTransform: "none",
                  whiteSpace: "normal",
                  widows: 2,
                  wordSpacing: "0px",
                  WebkitTextStrokeWidth: "0px",
                  textDecorationThickness: "initial",
                  textDecorationStyle: "initial",
                  textDecorationColor: "initial",
                  lineHeight: "24px",
                  textAlign: "justify",
                  backgroundColor: "#ffffff",
                }}
              >
                <strong>
                  Cách quy đổi tiền Việt Nam sang Trung Quốc (VND &gt;&gt;
                  CNY,RMB)
                </strong>
              </h3>
              <p className="rtejustify rtecenter">
                Quy đổi tiền Việt Nam sang tiền Trung Quốc thường áp dụng với
                những người có nhu cầu sang Trung Quốc công tác, du lịch, du học
                sinh hay những chủ shop có nhu cầu sang tận Trung Quốc nhập
                hàng. Để đổi tiền Việt sang tiền Trung Quốc, bạn thực hiện theo
                các bước như sau:
              </p>
              <p className="rtejustify rtecenter">
                <strong>Bước 1: </strong>Tiền Trung Quốc * tỷ giá = Tiền Việt
                Nam
              </p>
              <p className="rtejustify rtecenter">
                <strong>Bước 2:</strong> Bạn chuyển khoản vào số tài khoản của
                bên công ty dịch vụ đổi tiền
              </p>
              <p className="rtejustify rtecenter">
                <strong>Bước 3: </strong>Cung cấp tài khoản bên Trung Quốc cần
                nhận tiền qua tin nhắn, wechat, zalo, facebook,…… sau khi các
                nhân viên công ty đổi tiền nhận được tiền tại tài khoản Trung
                Quốc ngay lập tức sẽ chuyển khoản sang tài khoản quý khách yêu
                cầu.
              </p>
              <p>
                <span style={{ color: "#ed1c24" }}>
                  <em>
                    *Lưu ý: Tỷ giá đổi tiền sẽ được cập nhật hằng ngày theo sát
                    nhất giá thị trường, quý khách có thể nhắn tin với Order
                    hàng Quảng Châu để nắm được tỷ giá tại thời điểm cần chuyển.
                  </em>
                </span>
              </p>
              <p>&nbsp;</p>
              <p>
                <img
                  fetchPriority="high"
                  decoding="async"
                  className="size-medium aligncenter"
                  src="https://orderhangquangchau.com/wp-content/uploads/2022/09/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung_632ad492bdb20.jpeg"
                  width="606"
                  height="745"
                />
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default ServiceAlipay;
