import { SET_SUCCESS } from './successMsgTypes'

export const setSuccess = (success) => {
  return {
    type : SET_SUCCESS,
    payload : success
  }
}
