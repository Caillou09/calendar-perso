import { combineReducers } from 'redux'

import eventsOfDayReducer from './eventsOfDay/eventsOfDayReducer'
import getStartDateReducer from './startDate/startDateReducer'
import getTimeDateReducer from './timeDate/timeDateReducer'

const rootReducer = combineReducers({
  eventsOfDay : eventsOfDayReducer,
  getStartDate : getStartDateReducer,
  getTimeDate : getTimeDateReducer
})

export default rootReducer