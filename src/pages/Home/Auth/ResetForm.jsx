/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */

import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineDone } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import {
  PASSWORD_RULE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_RULE_MESSAGE,
} from '../../../utils/validators'
import FieldErrorAlert from '../../../components/Form/FieldErrorAlert'
import { useDispatch, useSelector } from 'react-redux'
import {
  changePasswordUser,
  resetState,
  sendCodeResetPassword,
} from '../../../redux/userSlice/userSlice'
import { useEffect } from 'react'
import { Spin } from 'antd'
const ResetForm = () => {
  const userInfor = JSON.parse(localStorage.getItem('email'))
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { success, user, error, isLoading } = useSelector((state) => state.users)

  const submitRegister = (data) => {
    dispatch(resetState())
    console.log('submit register: ', { ...data, email: userInfor })
    dispatch(changePasswordUser({ ...data, email: userInfor }))
  }

  const handleSendCodeVerify = () => {
    dispatch(sendCodeResetPassword({ email: userInfor }))
  }
  const directToLogin = () => {
    dispatch(resetState())
    navigate('/dashboard/login')
  }

  return (
    <>
      <div className="col-sm-7">
        <div className="header-login-frm">
          <h2 className="page-title">Đổi lại mật khẩu</h2>
        </div>

        {!success ? (
          <div className="dangkytaikhoan">
            <form onSubmit={handleSubmit(submitRegister)} className="form-horizontal">
              <div className="full">
                {/* email */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={userInfor.split('@')[0]}
                    disabled
                    placeholder="Email"
                  />
                </div>

                {/* dpassword */}
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Mật khẩu mới"
                    required
                    error={!!errors['password']}
                    {...register('password', {
                      required: FIELD_REQUIRED_MESSAGE,
                      pattern: {
                        value: PASSWORD_RULE,
                        message: PASSWORD_RULE_MESSAGE,
                      },
                    })}
                  />
                  <FieldErrorAlert errors={errors} fieldName={'password'} />
                </div>

                {/* confirmPassword */}
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Nhập lại mật khẩu mới"
                    required
                    error={!!errors['confirmPassword']}
                    {...register('confirmPassword', {
                      validate: (value) => {
                        if (value === watch('password')) return true
                        return 'Mật khẩu không trùng khớp!'
                      },
                    })}
                  />
                  <FieldErrorAlert errors={errors} fieldName={'confirmPassword'} />
                </div>

                {/* address */}
                {/* <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Số điện thoại"
                    required=""
                    // value={userInfor.phoneNumber}
                    error={!!errors["phoneNumber"]}
                    {...register("phoneNumber", {
                      required: FIELD_REQUIRED_MESSAGE,
                    })}
                  />
                  <FieldErrorAlert errors={errors} fieldName={"phoneNumber"} />
                </div> */}

                {/* code verify */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="code"
                    placeholder="Mã xác thực"
                    {...register('code', {
                      required: FIELD_REQUIRED_MESSAGE,
                    })}
                  />
                </div>

                {/* address */}
                {/* <div className="form-group">
                  <select
                    name="store"
                    className="form-control"
                    required=""
                    error={!!errors["address"]}
                    {...register("address", {
                      required: FIELD_REQUIRED_MESSAGE,
                    })}
                  >
                    <option value="">Địa đểm nhận hàng</option>
                    <option value="0">Hà Nội</option>
                    <option value="2">Đà Nẵng</option>
                    <option value="1">Sài Gòn</option>
                    <option value="3">Quảng Nam</option>
                  </select>
                  <FieldErrorAlert errors={errors} fieldName={"address"} />
                </div> */}

                {error ? (
                  <div
                    style={{
                      marginBottom: '0.7em',
                      overflow: 'hidden',
                      color: 'red',
                    }}
                  >
                    Mã xác thực sai, vui lòng kiểm tra lại email
                    <span
                      onClick={handleSendCodeVerify}
                      style={{
                        color: 'blue',
                        cursor: 'pointer',
                        marginLeft: '0.7em',
                      }}
                    >
                      Gửi lại mã xác thực
                    </span>
                  </div>
                ) : (
                  ''
                )}
                {isLoading ? (
                  <Spin />
                ) : (
                  <div className="form-group pull-left">
                    <input type="submit" className="btn btn-danger" name="save" value="Lưu" />
                  </div>
                )}
                <div className="form-group pull-right">
                  <div className="tml-action-links">
                    <Link to="/dashboard/login">Đăng nhập</Link>
                    <span style={{ marginLeft: '5px' }}>nếu bạn đã có tài khoản</span>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="networks clearfix" style={{ display: 'none' }}>
                <div className="pull-left">
                  <a href="">
                    <img src="https://my.orderhangquangchau.com/static/images/register-facebook.png" />
                  </a>
                </div>
                <div className="pull-right">
                  <a href="">
                    <img src="https://my.orderhangquangchau.com/static/images/register-google.png" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <span>Thay đổi mật khẩu thành công</span>
            <span
              onClick={directToLogin}
              style={{ marginLeft: '0.5em', color: 'blue', cursor: 'pointer' }}
              to={'/dashboard/login'}
            >
              Đăng nhập
            </span>
          </div>
        )}
      </div>

      <div className="col-sm-5">
        <div className="introduce">
          <h4 className="uppercase">Tại sao bạn lựa chọn chúng tôi:</h4>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>{' '}
            Giao dịch an toàn bảo mật tuyệt đối.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>{' '}
            Vận chuyển nhanh toàn quốc, giá tốt nhất.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>{' '}
            Phong cách phục vụ chuyên nghiệp, tư vấn nhiệt tình, chu đáo.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>{' '}
            Không vì lợi ích bán hàng mà bỏ qua lợi ích khách hàng.
          </p>
          <p className="text-success">
            <span>
              <MdOutlineDone />
            </span>{' '}
            Giải quyết mọi khúc mắc, khiếu nại nhanh chóng.
          </p>
        </div>
      </div>
    </>
  )
}

export default ResetForm
