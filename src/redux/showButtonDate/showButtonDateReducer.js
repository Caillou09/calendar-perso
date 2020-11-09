import { SHOW_BUTTON_DATE } from './showButtonDateTypes'
import showButtonDate from './showButtonDateActions'

const initialState = {
  buttonDate : false
}

const showButtonDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BUTTON_DATE : return {
      buttonDate : action.payload
    }

    default : return state

  }
}

export default showButtonDateReducer
