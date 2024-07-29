/* eslint-disable quotes */
import { notification } from 'antd'
export const openNotificationWithIcon = (type, title) => {
  notification[type]({
    message: 'Thông báo',
    description: title
  })
}
