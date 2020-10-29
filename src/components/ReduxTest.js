import React, {useEffect} from 'react'

import { connect } from 'react-redux'
import { fetchEventsOfDay } from '../redux'




const ReduxTest = ({ eventData, fetchEventsOfDay }) => {

  useEffect( () => {
    fetchEventsOfDay()
  }, [])




  return (
    <div>{console.log({eventData})}</div>
  )
}

const mapStateToProps = state => {
  return {
    eventData : state.appState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEventsOfDay: () => dispatch(fetchEventsOfDay())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
