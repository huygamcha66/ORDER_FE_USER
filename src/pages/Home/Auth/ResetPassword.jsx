/* eslint-disable quotes */
/* eslint-disable react/no-unknown-property */
import '../../../common/common.css'
import { useForm } from 'react-hook-form'
import { EMAIL_RULE, EMAIL_RULE_MESSAGE, FIELD_REQUIRED_MESSAGE } from '../../../utils/validators'
import { useSelector, useDispatch } from 'react-redux'
import FieldErrorAlert from '../../../components/Form/FieldErrorAlert'
import { resetState, sendCodeResetPassword } from '../../../redux/userSlice/userSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Row, Spin } from 'antd'
import { handleFocus } from '../../../utils'
const ResetPassword = () => {
  const dispatch = useDispatch()
  const { error, isSend, isLoading } = useSelector((state) => state.users)
  const navigate = useNavigate()

  return (
    <Row justify="center">
      <Col xs={24} lg={20}>
        LIÊN HỆ ĐẾN SỐ HOTLINE:  0703.384.888 ĐỂ LẤY LẠI MẬT KHẨU.
      </Col>
    </Row>
  )
}

export default ResetPassword
