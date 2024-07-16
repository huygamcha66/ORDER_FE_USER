/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/no-unknown-property */
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  Card,
  Flex,
  notification,
} from "antd";
import { handleFocus } from "../../../utils";
import Countdown from "../../../components/Countdown";
import "../../../common/common.css";
import { MESSAGE_TYPE } from "../../../common";
import { openNotificationWithIcon } from "../../../components/Nofitication";

const LoginForm = () => {
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, user, error, isLoading, isActive } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (success) {
      dispatch(resetState());
      navigate("/dashboard/member/profile");
    }
    if (JSON.stringify(user.token))
      localStorage.setItem("token", JSON.stringify(user.token));
  }, [success]);

  const onFinish = async (values) => {
    console.log("««««« values »»»»»", {
      ...values,
      addressIP: navigator.userAgent,
    });
    dispatch(loginUser(values));
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

        <Row justify="center">
          <Col span={12}>
            {" "}
            <Card style={{ margin: "10px 0px" }} title="Đăng nhập">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
              >
                <Form.Item
                  label="Email"
                  name="userName"
                  rules={[{ required: true, message: "Vui lòng nhập email" }]}
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
                  wrapperCol={{ xs: 16, offset: 6 }}
                  style={{ marginBottom: "10px" }}
                >
                  <Link style={{ color: "red" }} to={"/reset-password"}>
                    Lấy lại mật khẩu
                  </Link>
                </Form.Item>

                <Form.Item
                  wrapperCol={{ xs: 16, offset: 6 }}
                  style={{ marginBottom: "30px" }}
                >
                  <Flex align="center" justify="space-between">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Đăng nhập
                    </Button>
                    <Link style={{ color: "#1577ff" }} to="/register">
                      Đăng kí
                    </Link>
                  </Flex>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
};

export default LoginForm;
