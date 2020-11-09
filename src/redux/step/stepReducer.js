
import {GET_STEP} from './stepTypes'
import getStep from './stepActions'

const initialState = {
  step : 1
}

const getStepReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STEP : return {
      step : action.payload
    }

    default : return state

  }
}

export default getStepReducer
