/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable react/no-unknown-property */
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const userInfor = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : null;
  // const dispatch = useDispatch();
  // const { user, success } = useSelector((state) => state.users);
  // if (!userInfor) {
  //   console.log("««««« 333 »»»»»", 333);
  //   // navigate("/dashboard/login");
  // }
  // useEffect(() => {
  //   console.log("««««« 6 »»»»»", 6);
  //   if (!userInfor) {
  //     console.log("««««« 333 »»»»»", 333);
  //     navigate("/dashboard/login");
  //   }
  // }, [success]);
  // useEffect(() => {});

  useEffect(() => {
    console.log("««««« 99 »»»»»", 99);
  });
  // console.log("««««« user »»»»»", userInfor);
  return (
    <>
      <div className="col-sm-9">
        <div className="cart-by-page">
          <div className="titles">
            <h2 className="page-title">Thông tin tài khoản</h2>
          </div>
          <form className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-sm-2">Tài khoản</label>
              <div className="col-sm-6">
                <input
                  className="input form-control"
                  name="username"
                  type="text"
                  value={userInfor && userInfor.email.split("@")[0]}
                  disabled
                  readOnly=""
                  fdprocessedid="z5e5lm"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">
                E-mail
              </label>
              <div className="col-sm-6">
                <input
                  className="input form-control"
                  name="email"
                  type="text"
                  id="email"
                  disabled
                  value={userInfor && userInfor.email}
                  readOnly=""
                  fdprocessedid="5kcx1l"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2">Họ và tên</label>
              <div className="col-sm-6">
                <input
                  className="input form-control"
                  name="fullname"
                  type="text"
                  value={userInfor && userInfor.email.split("@")[0]}
                  fdprocessedid="ul46z"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="phone">
                Điện thoại
              </label>
              <div className="col-sm-6">
                <input
                  className="input form-control"
                  name="phone"
                  type="text"
                  id="phone"
                  value={userInfor && userInfor.phoneNumber}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="address">
                Địa chỉ
              </label>
              <div className="col-sm-6">
                <textarea
                  name="address"
                  className="input form-control"
                  id="address"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="address">
                Địa đểm nhận hàng
              </label>
              <div className="col-sm-6">
                <select
                  id="store"
                  name="store"
                  className="form-control"
                  onChange="loadSubStore(this.value)"
                  required=""
                  fdprocessedid="7hlsrk"
                >
                  <option value="0">Hà Nội</option>
                  <option value="1">Sài Gòn</option>
                  <option value="2" selected="">
                    Đà Nẵng
                  </option>
                  <option value="3">Quảng Nam</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-6">
                <input
                  type="submit"
                  className="btn btn-danger"
                  name="update"
                  disabled
                  value="Lưu thông tin"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
