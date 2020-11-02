import { LOAD_EVENTS_OF_DAY } from './eventsOfDayTypes'


export const loadEventsOfDay = (events) => {
  return {
    type : LOAD_EVENTS_OF_DAY,
    payload : events
  }
}

export const fetchEventsOfDay = (startDate) => {
  return (dispatch) => {

    const dateMin = (new Date(startDate)).setHours(0,0,0,0)
    const dateMax = (new Date(startDate)).setHours(23,59,59,0)

    fetch("/.netlify/functions/getEventsOfDay", {
      method: 'POST',
      body : JSON.stringify({
        dateMin, dateMax
      })
    })
    .then(response => response.json())
    .then(
      (data) => {
        const events = data.infosCalOfDay
        dispatch(loadEventsOfDay(events))
      })

  }
}
