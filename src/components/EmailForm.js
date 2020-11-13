import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import {getStep, setEmailForm, showButtonDate} from '../redux'

import addMinutes from 'date-fns/addMinutes'

import styled from 'styled-components'

import {Button, Form } from 'semantic-ui-react'

import '../App.css';

const EmailForm = ({timeDate, className, getStep, setEmailForm, showButtonDate}) => {

  const [email, setEmail] = useState("")
  const [nom, setNom] = useState("")
  const [timeDateEnd, setTimeDateEnd] = useState("")


  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/.netlify/functions/createEvent", {
      method : 'POST',
      body: JSON.stringify({
        email, timeDate, timeDateEnd
      })
    })
  }

  useEffect( () => {
    setTimeDateEnd(addMinutes(new Date(timeDate), 30))
  }, [timeDate])


  return (
    <div className={className}>
      <h4>Indiquez vos informations</h4>
      <Form

        onSubmit={(event) => handleSubmit(event)}>
        <Form.Field required style={{paddingTop : '20px'}}>
          <label>Votre nom</label>
          <input
            type="text"
            placeholder='Votre nom'
            onChange = {(event) => setNom(event.target.value)}/>
        </Form.Field>
        <Form.Field required style={{paddingTop : '20px'}}>
          <label>Votre email</label>
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder='Votre email'
            onChange = {(event) => setEmail(event.target.value)}/>
        </Form.Field>
        <Form.Field style={{paddingTop : '40px'}}>
          <Button
            type = 'button'
            icon='left chevron'
            labelPosition='left'
            content='Changer date'
            onClick={() => {
              getStep(true)
              setEmailForm(false)
              showButtonDate(false)}
            }/>
          <Button type ='submit' icon='check' labelPosition='right' content='Confirmer rendez-vous' color='blue'/>
        </Form.Field>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    timeDate : state.getTimeDate.timeDate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStep : step => dispatch(getStep(step)),
    setEmailForm : showEmailForm => dispatch(setEmailForm(showEmailForm)),
    showButtonDate : buttonDate => dispatch(showButtonDate(buttonDate))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(styled(EmailForm)`
  margin-top : 1em;
`)
