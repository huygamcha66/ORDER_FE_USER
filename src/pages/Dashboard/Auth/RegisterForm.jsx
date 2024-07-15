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
  Row,
  Col,
} from "antd";
import { handleFocus } from "../../../utils";
import "../../../common/common.css";
import { useCallback } from "react";
import { MESSAGE_TYPE } from "../../../common";

const RegisterForm = () => {
  const directToLogin = () => {
    dispatch(resetState());
    navigate("/login");
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
        <Row>
          <Col span={24}>
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
                <Link style={{ marginLeft: "5px" }} to="/login">
                  Đăng nhập!
                </Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
};

export default RegisterForm;
