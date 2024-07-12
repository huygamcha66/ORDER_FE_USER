/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import {
  LockOutlined,
  UserOutlined,
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  EMAIL_RULE,
  PASSWORD_RULE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_RULE_MESSAGE,
  EMAIL_RULE_MESSAGE,
  PHONE_RULE_MESSAGE,
  PHONE_RULE,
} from "../../../utils/validators";
import FieldErrorAlert from "../../../components/Form/FieldErrorAlert";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetState } from "../../../redux/userSlice/userSlice";
import {
  Button,
  ConfigProvider,
  Input,
  message,
  Spin,
  Form,
  Select,
} from "antd";
import { handleFocus } from "../../../utils";
import "../../../common/common.css";
import { useCallback } from "react";
import { MESSAGE_TYPE } from "../../../common";

const RegisterForm = () => {
  const directToLogin = () => {
    dispatch(resetState());
    navigate("/dashboard/login");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, user, error, isLoading } = useSelector(
    (state) => state.users
  );

  const submitRegister = (data) => {
    console.log("submit register: ", data);
    dispatch(registerUser(data));
  };

  const [messageApi, contextHolder] = message.useMessage();
  const onShowMessage = useCallback(
    (content, type = MESSAGE_TYPE.SUCCESS) => {
      messageApi.open({
        type: type,
        content: content,
      });
    },
    [messageApi]
  );
  const onFinish = async (values) => {
    console.log("««««« values »»»»»", {
      ...values,
      addressIP: navigator.userAgent,
    });
    // await dispatch(loginUser(values));
  };
  return (
    <>
      <>
        <div className="col-sm-7">
          {/* <div className="header-login-frm">
          <h2 className="page-title">Đăng ký thành viên</h2>
        </div> */}

          {!success ? (
            <></>
          ) : (
            // <div className="dangkytaikhoan">
            //   <form
            //     onSubmit={handleSubmit(submitRegister)}
            //     className="form-horizontal"
            //   >
            //     <div className="full">
            //       {/* email */}
            //       <div className="form-group">
            //         <input
            //           onFocus={() => handleFocus(dispatch)}
            //           type="text"
            //           className="form-control"
            //           name="email"
            //           placeholder="Email"
            //           required
            //           error={!!errors["email"]}
            //           {...register("email", {
            //             required: FIELD_REQUIRED_MESSAGE,
            //             pattern: {
            //               value: EMAIL_RULE,
            //               message: EMAIL_RULE_MESSAGE,
            //             },
            //           })}
            //         />
            //         <FieldErrorAlert errors={errors} fieldName={"email"} />
            //       </div>

            //       {/* dpassword */}
            //       <div className="form-group">
            //         <input
            //           onFocus={() => handleFocus(dispatch)}
            //           type="password"
            //           className="form-control"
            //           name="password"
            //           placeholder="Mật khẩu"
            //           required
            //           error={!!errors["password"]}
            //           {...register("password", {
            //             required: FIELD_REQUIRED_MESSAGE,
            //             pattern: {
            //               value: PASSWORD_RULE,
            //               message: PASSWORD_RULE_MESSAGE,
            //             },
            //           })}
            //         />
            //         <FieldErrorAlert errors={errors} fieldName={"password"} />
            //       </div>

            //       {/* password_confirmation */}
            //       <div className="form-group">
            //         <input
            //           onFocus={() => handleFocus(dispatch)}
            //           type="password"
            //           className="form-control"
            //           name="passconf"
            //           placeholder="Nhập lại mật khẩu"
            //           required
            //           fdprocessedid="m6w2j"
            //           error={!!errors["password_confirmation"]}
            //           {...register("password_confirmation", {
            //             validate: (value) => {
            //               if (value === watch("password")) return true;
            //               return "Mật khẩu không trùng khớp!";
            //             },
            //           })}
            //         />
            //         <FieldErrorAlert
            //           errors={errors}
            //           fieldName={"password_confirmation"}
            //         />
            //       </div>

            //       {/* address */}
            //       <div className="form-group">
            //         <input
            //           onFocus={() => handleFocus(dispatch)}
            //           type="text"
            //           className="form-control"
            //           name="phone"
            //           placeholder="Số điện thoại"
            //           required=""
            //           error={!!errors["phoneNumber"]}
            //           {...register("phoneNumber", {
            //             required: FIELD_REQUIRED_MESSAGE,
            //             pattern: {
            //               value: PHONE_RULE,
            //               message: PHONE_RULE_MESSAGE,
            //             },
            //           })}
            //         />
            //         <FieldErrorAlert errors={errors} fieldName={"phoneNumber"} />
            //       </div>

            //       {/* address */}
            //       <div className="form-group">
            //         <select
            //           name="store"
            //           className="form-control"
            //           required=""
            //           fdprocessedid="zddyf"
            //           error={!!errors["address"]}
            //           {...register("address", {
            //             required: FIELD_REQUIRED_MESSAGE,
            //           })}
            //         >
            //           <option value="">Địa đểm nhận hàng</option>
            //           <option value="0">Hà Nội</option>
            //           <option value="2">Đà Nẵng</option>
            //           <option value="1">Sài Gòn</option>
            //           <option value="3">Quảng Nam</option>
            //         </select>
            //         <FieldErrorAlert errors={errors} fieldName={"address"} />
            //       </div>
            //       <div style={{ marginBottom: "0.7em", color: "red" }}>
            //         {error && error}
            //       </div>
            //       {isLoading ? (
            //         <Spin />
            //       ) : (
            //         <div className="form-group pull-left">
            //           <input
            //             type="submit"
            //             className="btn btn-danger customBtn"
            //             name="save"
            //             value="Đăng ký"
            //           />
            //         </div>
            //       )}
            //       <div className="form-group pull-right">
            //         <div className="tml-action-links">
            //           <Link to="/dashboard/login">Đăng nhập</Link>
            //           <span style={{ marginLeft: "5px" }}>
            //             nếu bạn đã có tài khoản
            //           </span>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="clearfix"></div>
            //     <div className="networks clearfix" style={{ display: "none" }}>
            //       <div className="pull-left">
            //         <a href="">
            //           <img src="https://my.orderhangquangchau.com/static/images/register-facebook.png" />
            //         </a>
            //       </div>
            //       <div className="pull-right">
            //         <a href="">
            //           <img src="https://my.orderhangquangchau.com/static/images/register-google.png" />
            //         </a>
            //       </div>
            //     </div>
            //   </form>
            // </div>
            <></>
            // <div style={{ marginTop: "0.7em" }}>
            //   {user.message}, vui lòng vào gmail để kích hoạt tài khoản tài khoản,
            //   thời gian kích hoạt là 10 phút.
            //   <span
            //     onClick={directToLogin}
            //     style={{ marginLeft: "0.5em", color: "blue", cursor: "pointer" }}
            //     to={"/dashboard/login"}
            //   >
            //     Đăng nhập
            //   </span>
            // </div>
          )}
        </div>
        {/* 
      <div className="col-sm-5">
        <div className="introduce">
          <h4 className="uppercase">Tại sao bạn lựa chọn chúng tôi:</h4>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>
            Giao dịch an toàn bảo mật tuyệt đối.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>
            Vận chuyển nhanh toàn quốc, giá tốt nhất.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>
            Phong cách phục vụ chuyên nghiệp, tư vấn nhiệt tình, chu đáo.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>
            Không vì lợi ích bán hàng mà bỏ qua lợi ích khách hàng.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>
            Giải quyết mọi khúc mắc, khiếu nại nhanh chóng.
          </p>
        </div>
      </div> */}
      </>
      <>
        <ConfigProvider
          theme={{
            components: {
              Message: {
                zIndexPopup: 99999,
              },
            },
          }}
        >
          {contextHolder}

          <Form
            name="register"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            style={{ marginTop: "30px" }}
          >
            <Form.Item
              style={{ marginBottom: "30px" }}
              name="phoneNumber"
              label="Số điện thoại"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại" },
              ]}
              validateStatus={
                error && error.errors.phoneNumber ? "error" : undefined
              }
              // help={error ? error.errors.phoneNumber : ""}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "30px" }}
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
              validateStatus={
                error && error.errors && error.errors.email
                  ? "error"
                  : undefined
              }
              // help={error && error.errors ? error.errors.email : ""}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "30px" }}
              name="password"
              label="Mật khẩu"
              rules={[
                { required: true, message: "Vui lòng điền mật khẩu" },
                { min: 6, message: "Mật khẩu lớn hơn 6 kí tự" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "30px" }}
              name="confirm"
              label="Xác nhận mật khẩu"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Vui lòng xác nhận mật khẩu!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu không trùng khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Xác nhận mật khẩu"
              />
            </Form.Item>

            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
              style={{ marginBottom: "30px" }}
            >
              {/* <Input prefix={<HomeOutlined />} placeholder="Địa chỉ" /> */}
              <Select
                placeholder="Chọn địa chỉ"
                options={[
                  { value: 0, label: "Đà Nẵng" },
                  { value: 1, label: "Hà Nội" },
                  { value: 2, label: "HCM" },
                ]}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, xs: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng kí
              </Button>
              <Link style={{ marginLeft: "5px" }} to="/dashboard/login">
                Đăng nhập!
              </Link>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </>
    </>
  );
};

export default RegisterForm;
