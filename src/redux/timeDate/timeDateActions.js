import { GET_TIME_DATE } from './timeDateTypes'

export const getTimeDate = (date) => {
  return {
    type : GET_TIME_DATE,
    payload : date
  }
}
