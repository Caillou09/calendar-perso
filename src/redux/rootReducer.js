import { combineReducers } from 'redux'

import eventsOfDayReducer from './eventsOfDay/eventsOfDayReducer'
import getStartDateReducer from './startDate/startDateReducer'
import getTimeDateReducer from './timeDate/timeDateReducer'
import getStepReducer from './step/stepReducer'
import showButtonDateReducer from './showButtonDate/showButtonDateReducer'
import showEmailFormReducer from './showEmailForm/showEmailFormReducer'
import setSuccessReducer from './successMsg/successMsgReducer'

const rootReducer = combineReducers({
  eventsOfDay : eventsOfDayReducer,
  getStartDate : getStartDateReducer,
  getTimeDate : getTimeDateReducer,
  getStep : getStepReducer,
  showButtonDate : showButtonDateReducer,
  showEmailForm : showEmailFormReducer,
  setSuccess : setSuccessReducer
})

export default rootReducer
