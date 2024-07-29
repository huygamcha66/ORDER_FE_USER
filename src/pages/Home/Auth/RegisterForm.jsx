/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import { LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { PiAddressBook } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, resetState } from '../../../redux/userSlice/userSlice'
import { Button, ConfigProvider, Input, Form, Row, Col, Card, Spin, notification, Flex } from 'antd'
import '../../../common/common.css'
import { useCallback, useEffect, useState } from 'react'
import { emailRegex, phoneNumberRegex } from '../../../utils/constants'
import { openNotificationWithIcon } from '../../../components/Nofitication'

const RegisterForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { success, error, isLoading } = useSelector((state) => state.users)
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    if (error) {
      openNotificationWithIcon('error', error)
    }
    if (success) {
      dispatch(resetState())
      navigate('/login')
    }
  }, [error, success])
  const onFinish = (values) => {
    dispatch(registerUser(values))
  }

  return (
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
      <Row justify="center">
        <Col span={12}>
          <Card style={{ margin: '10px 0px' }} title="Đăng ký! thành viên mới">
            <Form
              name="register"
              onFinish={onFinish}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
            >
              <Form.Item
                style={{ marginBottom: '30px' }}
                name="phoneNumber"
                label="Số điện thoại"
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại' },
                  {
                    pattern: phoneNumberRegex,
                    message: 'Số điện thoại không hợp lệ'
                  }
                ]}
                // validateStatus={
                //   error && error.errors.phoneNumber ? "error" : undefined
                // }
              >
                <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: '30px' }}
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Vui lòng nhập email' },
                  {
                    pattern: emailRegex,
                    message: 'Email không hợp lệ'
                  }
                ]}
                // validateStatus={
                //   error && error.errors && error.errors.email
                //     ? "error"
                //     : undefined
                // }
                // help={error && error.errors ? error.errors.email : ""}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: '30px' }}
                name="password"
                label="Mật khẩu"
                rules={[
                  { required: true, message: 'Vui lòng điền mật khẩu' },
                  { min: 6, message: 'Mật khẩu lớn hơn 6 kí tự' }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Mật khẩu"
                />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: '30px' }}
                name="confirm"
                label="Xác nhận mật khẩu"
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng xác nhận mật khẩu!'
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('Mật khẩu không trùng khớp!'))
                    }
                  })
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
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                style={{ marginBottom: '30px' }}
              >
                <Input prefix={<PiAddressBook />} placeholder="Địa chỉ" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, xs: 16 }}>
                <Flex align="center" justify="space-between">
                  {isLoading ? (
                    <Spin />
                  ) : (
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Đăng ký!
                    </Button>
                  )}
                  <Link style={{ color: '#1577ff' }} to="/login">
                    Đăng nhập!
                  </Link>
                </Flex>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>{' '}
    </ConfigProvider>
  )
}

export default RegisterForm
