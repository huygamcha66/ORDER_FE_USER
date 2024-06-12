/* eslint-disable quotes */
/* eslint-disable react/no-unknown-property */
import { useForm } from "react-hook-form";
import {
  EMAIL_RULE,
  EMAIL_RULE_MESSAGE,
  FIELD_REQUIRED_MESSAGE,
} from "../../../utils/validators";
import { useSelector, useDispatch } from "react-redux";
import FieldErrorAlert from "../../../components/Form/FieldErrorAlert";
import {
  resetState,
  sendCodeResetPassword,
} from "../../../redux/userSlice/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { handleFocus } from "../../../utils";
const ResetPassword = () => {
  const dispatch = useDispatch();
  const { error, isSend, isLoading } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const sendCodeReset = (values) => {
    localStorage.setItem("email", JSON.stringify(values.email));
    dispatch(resetState());
    dispatch(sendCodeResetPassword(values));
  };
  useEffect(() => {
    if (isSend) {
      dispatch(resetState());
      navigate("/dashboard/reset");
    }
  }, [isSend]);
  return (
    <>
      <div className="col-sm-12">
        <div className="header-login-frm">
          <h2 className="page-title">Lấy lại mật khẩu</h2>
        </div>

        {!isSend ? (
          <div className="dangkytaikhoan">
            <form
              className="form-horizontal"
              role="form"
              onSubmit={handleSubmit(sendCodeReset)}
            >
              <div className="reset_password">
                <div className="form-group">
                  <input
                    onFocus={() => handleFocus(dispatch)}
                    type="text"
                    id="username"
                    className="form-control"
                    name="username"
                    placeholder="Nhập email người dùng ..."
                    error={!!errors["email"]}
                    {...register("email", {
                      required: FIELD_REQUIRED_MESSAGE,
                      pattern: {
                        value: EMAIL_RULE,
                        message: EMAIL_RULE_MESSAGE,
                      },
                    })}
                  />
                  <FieldErrorAlert errors={errors} fieldName={"email"} />
                  <div
                    style={{
                      marginTop: "0.7em",
                      overflow: "hidden",
                      color: "red",
                    }}
                  >
                    {error && error}
                  </div>
                </div>

                {isLoading ? (
                  <Spin />
                ) : (
                  <div className="form-group pull-left">
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="Gửi"
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div>Hãy truy cập vào email của bạn để đổi lại mật khẩu</div>
        )}
      </div>
    </>
  );
};

export default ResetPassword;
