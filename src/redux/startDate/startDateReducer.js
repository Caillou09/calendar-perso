
import {GET_START_DATE} from './startDateTypes'
import getStartDate from './startDateActions'

const initialState = {
  startDate : new Date()
}

const getStartDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_START_DATE : return {
      startDate : action.payload
    }

    default : return state

  }
}

export default getStartDateReducer
