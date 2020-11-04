import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux'

import styled from 'styled-components'

import Calendar from './Calendar'
import EmailForm from './EmailForm'

const CalendarForm = ({className}) => {

  const [step, setStep] = useState("1")

  return (
    <div className={className}>
      {step === "1" ? <Calendar></Calendar> : null}
      {step === "2" ? <EmailForm></EmailForm> : null}
    </div>
  )
}

export default styled(CalendarForm)`
grid-row-start : 2;
grid-column-start : 2;
align-self : top;
`
