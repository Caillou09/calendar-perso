
import {LOAD_EVENTS} from './appStateTypes'
import loadEvents from './appStateActions'

const initialState = {
  events : null,
  isLoaded : false
}

const appStateReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_EVENTS : return {
      isLoaded : true,
      events : action.payload,
      error: ''
    }

    default : return state
  }
}

export default appStateReducer
