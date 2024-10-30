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

export const totalPriceOrder = (totalPrice, rate) => {
  return totalPrice * rate + (totalPrice * rate * feeService(totalPrice * rate)) / 100
  // (
  //   Number(priceCluster[index].totalPrice * rate) +
  //   (Number(priceCluster[index].totalPrice * rate) *
  //     priceCluster[index].feeService) /
  //     100
  // )
}
