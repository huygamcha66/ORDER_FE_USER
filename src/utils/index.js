/* eslint-disable quotes */
// src/utils/handleFocus.js
// eslint-disable-next-line semi
import { resetState } from '../redux/userSlice/userSlice'

export const handleFocus = (dispatch) => {
  dispatch(resetState())
}
