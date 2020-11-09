
import {LOAD_EVENTS_OF_DAY_REQUEST, LOAD_EVENTS_OF_DAY_SUCCESS, LOAD_EVENTS_OF_DAY_FAILURE} from './eventsOfDayTypes'
import loadEventsOfDay from './eventsOfDayActions'

const initialState = {
  events : [],
  loading : false,
  error:''
}

const eventsOfDayReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_EVENTS_OF_DAY_REQUEST : return {
      ...state,
      loading : true
      }
    case LOAD_EVENTS_OF_DAY_SUCCESS : return{
      ...state,
      loading : false,
      events : action.payload
    }
    case LOAD_EVENTS_OF_DAY_FAILURE : return{
      ...state,
      loading : false,
      error : 'something went wrong'
    }

    default : return state
  }
}

export default eventsOfDayReducer
