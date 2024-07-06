/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/no-unknown-property */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  EMAIL_RULE,
  PASSWORD_RULE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_RULE_MESSAGE,
  EMAIL_RULE_MESSAGE,
  PASSWORD_RULE_MESSAGE_LOGIN,
  PASSWORD_RULE_LOGIN,
} from "../../../utils/validators";
import FieldErrorAlert from "../../../components/Form/FieldErrorAlert";
// import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
// import { login, registerUserAPI, selectCurrentUser } from '../../../redux/user/userSlice'
// import { login, selectCurrentUser } from "../../../redux/userSlice/userSlice";
import { useEffect } from "react";
import {
  loginUser,
  resetState,
  sendLinkActiveUser,
} from "../../../redux/userSlice/userSlice";
import { jwtDecode } from "jwt-decode";
import { Spin } from "antd";
import { handleFocus } from "../../../utils";
import Countdown from "../../../components/Countdown";
import "../../../common/common.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, user, error, isLoading, isActive } = useSelector(
    (state) => state.users
  );
  const submitLogIn = async (data) => {
    const { userName, password } = data;

    // Lấy địa chỉ IP từ API ipify
    let addressIP = "";
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      addressIP = data.ip; // Lấy địa chỉ IP từ response
    } catch (error) {
      console.error("Không thể lấy địa chỉ IP từ api.ipify.org", error);
      // Xử lý lỗi nếu cần thiết
    }

    // Gọi action loginUser với thông tin đăng nhập và địa chỉ IP
    dispatch(loginUser({ userName, password, addressIP }));
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    const refreshToken = localStorage.getItem("refreshToken")
      ? localStorage.getItem("refreshToken")
      : null;

    if (accessToken && jwtDecode(accessToken).exp < new Date()) {
      navigate("/dashboard/member/profile");
    }
    // if (
    //   jwtDecode(accessToken).exp < new Date() &&
    //   jwtDecode(refreshToken).exp < new Date()
    // ) {
    // }

    if (success) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("refreshToken", user.refreshToken);
      // site-a.com
      document.cookie = `token=${user.token}; path=/; SameSite=None; Secure`;

      console.log("««««« document.cookie »»»»»", document.cookie);

      dispatch(resetState());
      navigate("/dashboard/member/profile");
    }
  }, [success]);
  // const handleFocus = () => {
  //   dispatch(resetState());
  // };
  const handleSendLinkActiveUser = () => {
    const userName = getValues("userName");
    console.log("««««« userName »»»»»", userName);
    dispatch(sendLinkActiveUser({ email: userName }));
  };

  return (
    <div id="content" className="container">
      <main className="main" role="main">
        <div className="row main-row">
          <div className="col-md-12">
            <div className="dangkytaikhoan dangnhap">
              <div className="row">
                <div className="col-sm-6">
                  <div className="item_1">
                    <h3 className="title">Đăng ký thành viên mới</h3>
                    <p className="desc">
                      Đăng ký thành viên mới chỉ trong vòng 1 phút để có thể đặt
                      hàng.
                    </p>
                    <div className="button">
                      <Link
                        className="btn btn-success customBtn"
                        to="/dashboard/register"
                      >
                        Đăng ký tài khoản
                      </Link>{" "}
                      <Link
                        className="btn btn-danger customBtn"
                        to="/dashboard/reset-password"
                      >
                        Khôi phục tài khoản
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item_2">
                    <h3 className="title">Bạn đã có tài khoản</h3>
                    <p style={{ color: "red" }}>
                      Notice: Nếu không thể đăng nhập hệ thống, Nhấn khôi phục
                      tài khoản để lấy lại thông tin
                      <br />
                      hoặc Liện hệ với chúng tôi để nhận mật khẩu mới
                    </p>

                    <form
                      className="form_dangnhap"
                      onSubmit={handleSubmit(submitLogIn)}
                    >
                      <div className="form-group">
                        <label htmlFor="username">Tài khoản Hoặc Email</label>
                        <input
                          onFocus={() => handleFocus(dispatch)}
                          type="text"
                          name="username"
                          className="form-control"
                          required
                          error={!!errors["userName"]}
                          {...register("userName", {
                            required: FIELD_REQUIRED_MESSAGE,
                            // pattern: {
                            //   value: EMAIL_RULE,
                            //   message: EMAIL_RULE_MESSAGE,
                            // },
                          })}
                        />
                        <FieldErrorAlert errors={errors} fieldName={"email"} />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                          onFocus={() => handleFocus(dispatch)}
                          type="password"
                          name="password"
                          className="form-control"
                          required
                          error={!!errors["password"]}
                          {...register("password", {
                            required: FIELD_REQUIRED_MESSAGE,
                            pattern: {
                              value: PASSWORD_RULE_LOGIN,
                              message: PASSWORD_RULE_MESSAGE_LOGIN,
                            },
                          })}
                        />
                        <FieldErrorAlert
                          errors={errors}
                          fieldName={"password"}
                        />
                      </div>
                      <div style={{ marginBottom: "0.7em", color: "red" }}>
                        {error ? error : ""}
                        {error === "Tài khoản người dùng chưa xác thực" && (
                          <>
                            <span>
                              , vui lòng kích hoạt tài khoản tại email hoặc
                            </span>
                            <div
                              style={{
                                width: "max-content",
                                color: "blue",
                                cursor: "pointer",
                              }}
                            >
                              {!isActive ? (
                                <span onClick={handleSendLinkActiveUser}>
                                  Gửi lại mã
                                </span>
                              ) : (
                                <>
                                  <span style={{ marginRight: "4px" }}>
                                    Vui lòng kích hoạt trước
                                  </span>
                                  <Countdown initialTime={600} />
                                </>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                      {isLoading ? (
                        <Spin />
                      ) : (
                        <input
                          type="submit"
                          className="btn btn-danger customBtn"
                          name="login"
                          value="Đăng nhập"
                        />
                      )}
                    </form>
                    {/* {success ? "Đăng nhập thành công" : "Chưa đăng nhập"} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;
