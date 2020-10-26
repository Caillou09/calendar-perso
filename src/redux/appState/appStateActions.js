import { LOAD_EVENTS } from './appStateTypes'

export const loadEvents = (events) => {
  return {
    isLoaded : true,
    type : LOAD_EVENTS,
    payload : events
  }
}

export const fetchEvents = () => {
  return (dispatch) => {

    fetch("/.netlify/functions/authentify")
      .then(response => response.json())
      .then( data => {
        const events = data.infosCal
        dispatch(loadEvents(events))
      })
  }
}
