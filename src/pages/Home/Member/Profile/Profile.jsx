/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { AiOutlineUser } from "react-icons/ai";
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
  Spin
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
      // dispatch(detailMe({ addressIP: navigator.userAgent }));
      dispatch(resetState());
    }
  }, [decodedToken, dispatch]);

  const onFinish = async (values) => {
    console.log("««««« values »»»»»", {
      ...values,
      addressIP: navigator.userAgent
    });
    // await dispatch(loginUser(values));
  };
  console.log("««««« user »»»»»", user && user.user && user.user.phoneNumber );
  return (
    <>
      {user && user.user ? <div className="profile_wrapper">
        <ConfigProvider
          theme={{
            components: {
              Message: {
                zIndexPopup: 99999
              }
            }
          }}
        >
          {contextHolder}
          {decodedToken ? (
            <Row justify="center">
              <Col span={12}>
                <Card style={{ margin: "30px 0px" }} title="Thông tin tài khoản">
                  <Form
                    initialValues={{
                      number: user && user.user && user.user.phoneNumber,
                      email: user && user.user && user.user.email,
                      address:  user && user.user && user.user.address,
                      userName:  user && user.user && user.user.userName
                    }}
                    name="register"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    form={form}
                  >
                    <Form.Item
                      name="email"
                      label="Email"
                    >
                      <Input
                        prefix={<MailOutlined />}
                        disabled
                        placeholder="Email"
                      />
                    </Form.Item>
                    <Form.Item
                      name="number"
                      label="Số điện thoại"
                    >
                      <Input
                        disabled
                        prefix={<PhoneOutlined />}
                        placeholder="Số điện thoại"
                      />
                    </Form.Item>
                    <Form.Item
                      name="userName"
                      label="User Name"
                      rules={[
                        { required: true, message: "Vui lòng nhập User Name" }
                      ]}
                    >
                      <Input
                        prefix={<AiOutlineUser />}
                        placeholder="User Name"
                      />
                    </Form.Item>

                    <Form.Item
                      name="address"
                      label="Địa chỉ"
                      rules={[
                        { required: true, message: "Vui lòng nhập địa chỉ" }
                      ]}
                    >
                      <Input
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
      </div> : <Spin />}
    </>
  );
};

export default Profile;
