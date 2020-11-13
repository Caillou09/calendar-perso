import {SET_EMAIL_FORM} from './showEmailFormTypes'

export const setEmailForm = (showEmailForm) => {
  return {
    type : SET_EMAIL_FORM,
    payload : showEmailForm
  }
}
