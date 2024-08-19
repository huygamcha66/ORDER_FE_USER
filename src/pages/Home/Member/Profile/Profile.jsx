/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
// import { registerUser, resetState } from "../../../redux/userSlice/userSlice";
import { Button, ConfigProvider, Input, message, Form, Row, Col, Card, Spin } from 'antd'
import { IoLocationOutline } from 'react-icons/io5'
// import "../../../common/common.css";
import { useEffect, useState } from 'react'
import './index.css'
import useDecodedToken from '../../../../components/UserInfor'
import { resetState } from '../../../../redux/cartSlice/cartSlice'
import { detailMe, updateMe } from '../../../../redux/userSlice/userSlice'
import { openNotificationWithIcon } from '../../../../components/Nofitication'

const Profile = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const { user, isUpdate, error } = useSelector((state) => state.users)
  const { decodedToken } = useDecodedToken('token')
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const onFinish = async (values) => {
    setIsLoading(true)
    dispatch(
      updateMe({ userName: values.userName, address: values.address, userId: user.user._id })
    )
  }
  useEffect(() => {
    if (error) {
      openNotificationWithIcon('error', error.message)
      setIsLoading(false)
    }
    if (isUpdate) {
      openNotificationWithIcon('success', 'Cập nhật profile thành công')
      setIsLoading(false)
    }
  }, [isUpdate, error])
  return (
    <>
      {user && user.user ? (
        <div className="profile_wrapper">
          <ConfigProvider
            theme={{
              components: {
                Message: {
                  zIndexPopup: 999999
                }
              }
            }}
          >
            {contextHolder}
            {decodedToken ? (
              <Row justify="center">
                <Col span={12}>
                  <Card style={{ margin: '30px 0px' }} title="Thông tin tài khoản">
                    <Form
                      initialValues={{
                        number: user && user.user && user.user.phoneNumber,
                        email: user && user.user && user.user.email,
                        address: user && user.user && user.user.address,
                        userName: user && user.user && user.user.userName
                      }}
                      name="register"
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 16 }}
                      form={form}
                      onFinish={onFinish}
                    >
                      <Form.Item name="email" label="Email">
                        <Input prefix={<MailOutlined />} disabled placeholder="Email" />
                      </Form.Item>
                      <Form.Item name="number" label="Số điện thoại">
                        <Input disabled prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
                      </Form.Item>
                      <Form.Item
                        name="userName"
                        label="User Name"
                        rules={[{ required: true, message: 'Vui lòng nhập User Name' }]}
                      >
                        <Input prefix={<AiOutlineUser />} placeholder="User Name" />
                      </Form.Item>

                      <Form.Item
                        name="address"
                        label="Địa chỉ"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                      >
                        <Input prefix={<IoLocationOutline />} placeholder="Nhập địa chỉ" />
                      </Form.Item>

                      <Form.Item wrapperCol={{ xs: 16, offset: 6 }}>
                        {!isLoading ? (
                          <Button type="primary" htmlType="submit" className="login-form-button">
                            Lưu
                          </Button>
                        ) : (
                          <Spin />
                        )}
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
      ) : (
        <Spin />
      )}
    </>
  )
}

export default Profile
