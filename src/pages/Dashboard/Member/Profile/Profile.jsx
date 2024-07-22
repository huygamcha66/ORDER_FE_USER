/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
// import { registerUser, resetState } from "../../../redux/userSlice/userSlice";
import {
  Button,
  ConfigProvider,
  Input,
  message,
  Form,
  Row,
  Col,
  Card,
  Spin,
} from "antd";
import { IoLocationOutline } from "react-icons/io5";
// import "../../../common/common.css";
import { useEffect } from "react";
import "./index.css";
import useDecodedToken from "../../../../components/UserInfor";
import { resetState } from "../../../../redux/cartSlice/cartSlice";
import { detailMe } from "../../../../redux/userSlice/userSlice";

const Profile = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { user } = useSelector((state) => state.users);
  const { decodedToken } = useDecodedToken("token");
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (decodedToken) {
      dispatch(detailMe({ addressIP: navigator.userAgent }));
      dispatch(resetState());
    }
  }, [decodedToken, dispatch]);

  const onFinish = async (values) => {
    console.log("««««« values »»»»»", {
      ...values,
      addressIP: navigator.userAgent,
    });
    // await dispatch(loginUser(values));
  };
  console.log("««««« user »»»»»", user);
  return (
    <div className="profile_wrapper">
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
        {decodedToken ? (
          <Row justify="center">
            <Col span={12}>
              <Card style={{ marginTop: "30px" }} title="Thông tin tài khoản">
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
        ) : (
          <Spin />
        )}
      </ConfigProvider>
    </div>
  );
};

export default Profile;
