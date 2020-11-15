import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux'
import {getStep} from '../redux'

import styled from 'styled-components'

import './animations.css'

import Calendar from './Calendar'
import EmailForm from './EmailForm'

import { Message } from 'semantic-ui-react'

const CalendarForm = ({className, step, showEmailForm, getStep, success}) => {

  return (
    <div className={className}>
      { step &&
        <Calendar ></Calendar>
      }

      { showEmailForm &&
        <EmailForm></EmailForm>
      }

      { success &&
        <Message
          success
          header='Demande de rendez-vous envoyée'
          content="Vous allez recevoir l'invitation dans votre boite mail"
        />
      }



    </div>
  )
}

const mapStateToProps = state => {
  return {
    step : state.getStep.step,
    showEmailForm : state.showEmailForm.showEmailForm,
    success : state.setSuccess.success
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
align-self : start;
padding : 20px;

`)
