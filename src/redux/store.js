import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import eventsOfDayReducer from './eventsOfDay/eventsOfDayReducer';
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
