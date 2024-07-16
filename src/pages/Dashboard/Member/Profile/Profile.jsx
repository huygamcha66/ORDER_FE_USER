/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { LockOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { registerUser, resetState } from "../../../redux/userSlice/userSlice";
import {
  Button,
  ConfigProvider,
  Input,
  message,
  Form,
  Select,
  Row,
  Col,
  Card,
} from "antd";
import { IoLocationOutline } from "react-icons/io5";
// import "../../../common/common.css";
import { useCallback, useEffect } from "react";
import { MESSAGE_TYPE } from "../../../../common";
import useDecodedToken from "../../../../components/UserInfor";

const Profile = () => {
  // const directToLogin = () => {
  //   dispatch(resetState());
  //   navigate("/login");
  // };
  const { decodedToken, errorToken } = useDecodedToken("token");

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log("««««« values »»»»»", {
      ...values,
      addressIP: navigator.userAgent,
    });
    // await dispatch(loginUser(values));
  };
  const [form] = Form.useForm();
  return (
    <div style={{ marginTop: "20px" }}>
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
        {decodedToken && (
          <Row justify="center">
            <Col span={12}>
              <Card style={{ margin: "10px 0px" }} title="Thông tin tài khoản">
                <Form
                  initialValues={{
                    phoneNumber: decodedToken && decodedToken.phoneNumber,
                    email: decodedToken && decodedToken.email,
                    address: decodedToken && decodedToken.address,
                  }}
                  name="register"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 16 }}
                  form={form}
                >
                  <Form.Item
                    style={{ marginBottom: "30px" }}
                    name="phoneNumber"
                    label="Số điện thoại"
                  >
                    <Input
                      prefix={<PhoneOutlined />}
                      disabled
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>

                  <Form.Item
                    style={{ marginBottom: "30px" }}
                    name="email"
                    label="Email"
                  >
                    <Input
                      prefix={<MailOutlined />}
                      disabled
                      placeholder="Email"
                    />
                  </Form.Item>

                  {/* <Form.Item
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
              </Form.Item> */}

                  <Form.Item
                    name="address"
                    label="Địa chỉ"
                    rules={[
                      { required: true, message: "Vui lòng nhập địa chỉ" },
                    ]}
                    style={{ marginBottom: "30px" }}
                  >
                    {/* <Input prefix={<HomeOutlined />} placeholder="Địa chỉ" /> */}
                    <Input
                      // disabled
                      prefix={<IoLocationOutline />}
                      placeholder="Nhập địa chỉ"
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ xs: 16, offset: 6 }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Lưu
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        )}
      </ConfigProvider>
    </div>
  );
};

export default Profile;
