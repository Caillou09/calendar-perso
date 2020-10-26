import { combineReducers } from 'redux'

import appStateReducer from './appState/appStateReducer'

const rootReducer = combineReducers({
  appState : appStateReducer
})

export default rootReducer
