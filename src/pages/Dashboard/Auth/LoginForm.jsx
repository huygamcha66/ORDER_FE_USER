/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/no-unknown-property */
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
// import { login, registerUserAPI, selectCurrentUser } from '../../../redux/user/userSlice'
// import { login, selectCurrentUser } from "../../../redux/userSlice/userSlice";
import { useEffect } from "react";
import { loginUser, resetState } from "../../../redux/userSlice/userSlice";
import {
  ConfigProvider,
  Form,
  Input,
  Button,
  Col,
  Row,
  Card,
  Flex,
  notification,
  Spin,
} from "antd";
import "../../../common/common.css";
import { openNotificationWithIcon } from "../../../components/Nofitication";

const LoginForm = () => {
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, user, error, isLoading, isActive } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (error) {
      openNotificationWithIcon("error", error);
    }
    if (success) {
      dispatch(resetState());
      navigate("/dashboard/member/profile");
    }
    if (JSON.stringify(user.token))
      localStorage.setItem("token", JSON.stringify(user.token));
  }, [success, error]);

  const onFinish = async (values) => {
    const addressIP = navigator.userAgent;
    // Gọi action loginUser với thông tin đăng nhập và địa chỉ IP
    dispatch(loginUser({ ...values, addressIP: addressIP }));
  };
  return (
    <div style={{ marginTop: "150px" }}>
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
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập email hoặc username",
                    },
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
                    {isLoading ? (
                      <Spin />
                    ) : (
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Đăng nhập
                      </Button>
                    )}
                    <Link style={{ color: "#1577ff" }} to="/register">
                      Đăng ký!
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
