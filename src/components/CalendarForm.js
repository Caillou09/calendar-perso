import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux'
import {getStep} from '../redux'

import styled from 'styled-components'

import './animations.css'

import Calendar from './Calendar'
import EmailForm from './EmailForm'

import CSSTransition from 'react-transition-group/CSSTransition'

const CalendarForm = ({className, step, showEmailForm, getStep}) => {

  return (
    <div className={className}>
      { step &&
        <Calendar ></Calendar>
      }

      { showEmailForm &&
          <EmailForm></EmailForm>
      }

    </div>
  )
}

const mapStateToProps = state => {
  return {
    step : state.getStep.step,
    showEmailForm : state.showEmailForm.showEmailForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStep : step => dispatch(getStep(step))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(styled(CalendarForm)`
grid-row-start : 2;
grid-column-start : 2;
align-self : top;
padding : 20px;

`)
