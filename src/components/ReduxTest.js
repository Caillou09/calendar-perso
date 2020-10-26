import React, {useEffect} from 'react'

import { connect } from 'react-redux'
import { fetchEvents } from '../redux'




const ReduxTest = ({ eventData, fetchEvents }) => {

  useEffect( () => {
    fetchEvents()
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
    fetchEvents: () => dispatch(fetchEvents())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
