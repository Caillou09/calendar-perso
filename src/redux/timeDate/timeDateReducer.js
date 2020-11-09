import {GET_TIME_DATE} from './timeDateTypes'
import getTimeDate from './timeDateActions'

const initialState = {
  timeDate :'',
  selected : false
}

const getTimeDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIME_DATE : return {
      timeDate : action.payload
    }

    default : return state
  }
}

export default getTimeDateReducer
