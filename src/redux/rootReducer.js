import { combineReducers } from 'redux'

import eventsOfDayReducer from './eventsOfDay/eventsOfDayReducer'
import getStartDateReducer from './startDate/startDateReducer'

const rootReducer = combineReducers({
  eventsOfDay : eventsOfDayReducer,
  getStartDate : getStartDateReducer
})

export default rootReducer
