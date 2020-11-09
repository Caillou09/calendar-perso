import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux'

import styled from 'styled-components'

import Calendar from './Calendar'
import EmailForm from './EmailForm'

const CalendarForm = ({className, step}) => {

  return (
    <div className={className}>
      {step === 1 ? <Calendar></Calendar> : null}
      {step === 2 ? <EmailForm></EmailForm> : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    step : state.getStep.step
  }
}


export default connect(mapStateToProps)(styled(CalendarForm)`
grid-row-start : 2;
grid-column-start : 2;
align-self : top;
`)
