import { SHOW_BUTTON_DATE } from './showButtonDateTypes'

export const showButtonDate = (buttonDate) => {
  return {
    type : SHOW_BUTTON_DATE,
    payload : buttonDate
  }
}
