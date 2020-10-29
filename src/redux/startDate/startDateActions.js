import { GET_START_DATE } from './startDateTypes'

export const getStartDate = (date) => {
  return {
    type : GET_START_DATE,
    payload : date
  }
}
