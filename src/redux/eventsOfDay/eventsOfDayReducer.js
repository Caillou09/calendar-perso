
import {LOAD_EVENTS_OF_DAY} from './eventsOfDayTypes'
import loadEventsOfDay from './eventsOfDayActions'

const initialState = {
  events : []
}

const eventsOfDayReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_EVENTS_OF_DAY : return {
      events : action.payload,
      error: ''
    }

    default : return state
  }
}

export default eventsOfDayReducer
