/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/no-unknown-property */
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

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
import { useCallback, useEffect } from "react";
import {
  loginUser,
  resetState,
  sendLinkActiveUser,
} from "../../../redux/userSlice/userSlice";
import { jwtDecode } from "jwt-decode";
import {
  ConfigProvider,
  message,
  Spin,
  Form,
  Input,
  Button,
  Col,
  Row,
} from "antd";
import { handleFocus } from "../../../utils";
import Countdown from "../../../components/Countdown";
import "../../../common/common.css";
import { MESSAGE_TYPE } from "../../../common";

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
    const addressIP = navigator.userAgent;
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

  const handleSendLinkActiveUser = () => {
    const userName = getValues("userName");
    console.log("««««« userName »»»»»", userName);
    dispatch(sendLinkActiveUser({ email: userName }));
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
    <div style={{ marginTop: "180px" }}>
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
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          wrapperCol={{ span: 8 }}
          labelCol={{ span: 8 }}
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
            style={{ marginBottom: "30px" }}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng điền mật khẩu" },
              { min: 6, message: "Mật khẩu lớn hơn 6 kí tự" },
            ]}
            style={{ marginBottom: "30px" }}
          >
            <Input.Password
              allowClear
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ xs: 8, offset: 8 }}
            style={{ marginBottom: "10px" }}
          >
            <Link to={"/reset-password"}>Lấy lại mật khẩu</Link>
          </Form.Item>

          <Form.Item
            wrapperCol={{ xs: 8, offset: 8 }}
            style={{ marginBottom: "30px" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
            <Link style={{ marginLeft: "5px" }} to="/register">
              Đăng kí thành viên
            </Link>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default LoginForm;
