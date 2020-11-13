import {SET_EMAIL_FORM} from './showEmailFormTypes'

import setEmailForm from './showEmailFormActions'

const initialState = {
  showEmailForm : false
}

const showEmailFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL_FORM : return {
      showEmailForm : action.payload
    }
    default : return state
  }
}

export default showEmailFormReducer
