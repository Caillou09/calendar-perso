import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import addMinutes from 'date-fns/addMinutes'

import styled from 'styled-components'

import '../App.css';

const EmailForm = ({timeDate, className}) => {

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
      <form
        className='formResa'
        onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          className = 'inputResa'
          onChange = {(event) => setNom(event.target.value)}
          placeholder='votre nom'/>
        <input
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder='votre adresse mail'
          className='inputResa'
          onChange={(event) => handleChange(event)}/>
        <button type='submit' className='boutonResa'>Créer rendez-vous</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    timeDate : state.getTimeDate.timeDate
  }
}

export default connect(mapStateToProps)(styled(EmailForm)`
  margin-top : 1em;
`)
