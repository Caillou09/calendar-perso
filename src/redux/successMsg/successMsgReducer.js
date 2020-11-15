import { SET_SUCCESS } from './successMsgTypes'

import setSuccess from './successMsgActions'

const initialState = {
  success : false
}

const setSuccessReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SUCCESS : return {
      success : action.payload
    }
    default : return state
  }
}

export default setSuccessReducer
