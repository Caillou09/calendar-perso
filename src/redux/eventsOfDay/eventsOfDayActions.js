import { LOAD_EVENTS_OF_DAY_REQUEST } from './eventsOfDayTypes'
import { LOAD_EVENTS_OF_DAY_SUCCESS } from './eventsOfDayTypes'
import { LOAD_EVENTS_OF_DAY_FAILURE } from './eventsOfDayTypes'

export const loadEventsOfDayRequest = () => {
  return {
    type : LOAD_EVENTS_OF_DAY_REQUEST
  }
}

export const loadEventsOfDaySuccess = (events) => {
  return {
    type : LOAD_EVENTS_OF_DAY_SUCCESS,
    payload : events
  }
}

export const loadEventsOfDayFailure = (error) => {
  return {
    type : LOAD_EVENTS_OF_DAY_FAILURE,
    payload : error
  }
}

export const fetchEventsOfDay = (startDate) => {
  return (dispatch) => {

    const dateMin = (new Date(startDate)).setHours(0,0,0,0)
    const dateMax = (new Date(startDate)).setHours(23,59,59,0)

    const dateMinFormated = (new Date(dateMin)).toISOString()
    const dateMaxFormated = (new Date(dateMax)).toISOString()

    console.log(JSON.stringify({dateMinFormated, dateMaxFormated}), new Date(startDate).toISOString())
    dispatch(loadEventsOfDayRequest())
    fetch("/.netlify/functions/getEventsOfDay", {
      method: 'POST',
      body : JSON.stringify({
        dateMinFormated, dateMaxFormated
      })
    })
    .then(response => response.json())
    .then(data => {
        const events = data.infosCalOfDay
        dispatch(loadEventsOfDaySuccess(events))
      })
      .catch(error => {
        const errorMsg = error;
        dispatch(loadEventsOfDayFailure(error))
      })

  }
}
