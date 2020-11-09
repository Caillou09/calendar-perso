import { GET_STEP } from './stepTypes'

export const getStep = (step) => {
  return {
    type : GET_STEP,
    payload : step
  }
}
