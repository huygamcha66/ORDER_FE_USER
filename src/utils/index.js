/* eslint-disable quotes */
// src/utils/handleFocus.js
// eslint-disable-next-line semi
import { resetState } from '../redux/userSlice/userSlice'

export const handleFocus = (dispatch) => {
  dispatch(resetState())
}

export const feeService = (value) => {
  if (value < 2000000) {
    return 3
  } else if (value >= 2000000 && value < 20000000) {
    return 2.5
  } else if (value >= 20000000 && value < 100000000) {
    return 2
  } else {
    return 1
  }
}
