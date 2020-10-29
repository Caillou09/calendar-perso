import { LOAD_EVENTS_OF_DAY } from './eventsOfDayTypes'

export const loadEventsOfDay = (events) => {
  return {
    type : LOAD_EVENTS_OF_DAY,
    payload : events
  }
}

export const fetchEventsOfDay = (startDate) => {
  return (dispatch) => {

    fetch("/.netlify/functions/getEventsOfDay", {
      method: 'POST',
      body : startDate
    })
    .then(response => response.json())
    .then(
      (data) => {
        const events = data.infosCalOfDay
        dispatch(loadEventsOfDay(events))
      })

  }
}
