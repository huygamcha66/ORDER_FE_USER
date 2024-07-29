/* eslint-disable quotes */
export const FIELD_REQUIRED_MESSAGE = 'Trường bắt buộc nhập.'
export const EMAIL_RULE = /^\S+@\S+\.\S+$/
export const EMAIL_RULE_MESSAGE = 'Email không hợp lệ. Ví dụ (example@trungquandev.com)'
export const PHONE_RULE = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
export const PHONE_RULE_MESSAGE = 'Số điện thoại không hợp lệ'
export const PASSWORD_RULE = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
export const PASSWORD_RULE_MESSAGE =
  'Mật khẩu phải có ít nhất 8 kí tự, 1 kí tự đặt biệt, 1 kí tự ghi hoa, 1 chữ số'
export const PASSWORD_RULE_LOGIN = /^.{8,20}$/
export const PASSWORD_RULE_MESSAGE_LOGIN = 'Mật khẩu phải có ít nhất 8 kí tự và nhỏ hơn 20 kí tự'
