/* eslint-disable quotes */
// eslint-disable-next-line semi
// http://127.0.0.1:3200
// https://tatcadichvu.com
export const API_ROOT = 'https://tatcadichvu.com'
export const phoneNumberRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/
export const emailRegex = /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/
export const passwordRegex = /^[A-Za-z\d!@#$%^&*]{6}$/
// MAIL: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
// PHONE: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
// PASSWORD: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,

export const STATUS_ORDER_MAP = {
  1: 'Đã cọc',
  2: 'Đang mua hàng',
  // tuetc
  // 3: 'Đã về kho Trung Quốc',
  // 4: 'Đang vận chuyển về Việt Nam',
  3: 'Đã mua hàng',
  5: 'Đã về kho VN',
  6: 'Sẵn sàng giao hàng',
  7: 'Hoàn thành',
  8: 'Đang khiếu nại',
  9: 'Đã hủy',
  10: 'Hết hàng',
  11: 'Đã cọc, đã tư vấn'
}
