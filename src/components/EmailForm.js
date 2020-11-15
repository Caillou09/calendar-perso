import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import {getStep, setEmailForm, showButtonDate, setSuccess} from '../redux'

import addMinutes from 'date-fns/addMinutes'

import styled from 'styled-components'

import {Button, Form, Input } from 'semantic-ui-react'

import '../App.css';

const EmailForm = ({timeDate, className, getStep, setEmailForm, showButtonDate, setSuccess}) => {

  const [email, setEmail] = useState("")
  const [nom, setNom] = useState("")
  const [timeDateEnd, setTimeDateEnd] = useState("")
  const [error, setError] = useState(null)
  const [errorText, setErrorText] = useState(null)
  const [successMsg, setSuccessMsg] = useState(false)


  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email) === false && email.length>0) {
      let errorMsg = {
        content : 'adresse email non valide'
      }
      setError(errorMsg)
    }
    else if (email === '' && nom ==="") {
      let errorMsg = {
        content : 'veuillez saisir votre email'
      }
      setError(errorMsg)
      setErrorText({content : 'veuillez saisir votre nom'})
    }

    else {
      setSuccessMsg(true)
      setSuccess(true)
      setEmailForm(false)
      fetch("/.netlify/functions/createEvent", {
        method : 'POST',
        body: JSON.stringify({
          email, timeDate, timeDateEnd
        })
      })

    }



  }

  useEffect( () => {
    setTimeDateEnd(addMinutes(new Date(timeDate), 30))
  }, [timeDate])

  const handleBlur = (event) => {
    console.log(event.target.type)

    switch(event.target.type) {
      case 'text' :
        if (nom ==="") {
          let errorMsg = {
            content : 'veuillez remplir ce champ'
          }
          setErrorText(errorMsg)
        }
        else {
          let errorMsg = null
          setErrorText(errorMsg)
        }
      break;
      case 'email' :
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (regex.test(email) === false && email.length>0) {
        let errorMsg = {
          content : 'adresse email non valide'
        }
        setError(errorMsg)
      }
      else if (email ==='') {
        let errorMsg = {
          content : 'veuillez saisir votre email'
        }
        setError(errorMsg)
      }

      else {
        let errorMsg = null
        setError(errorMsg)
      }
      break;
    }

  }

  return (
    <div className={className}>
      <h4>Indiquez vos informations</h4>
      <Form
        success = {successMsg}
        noValidate
        onSubmit={(event) => handleSubmit(event)}>
        <Form.Field
          required
          style={{paddingTop : '20px'}}
          type="text"
          placeholder='Votre nom'
          onChange = {(event) => setNom(event.target.value)}
          onBlur={(event) => handleBlur(event)}
          error={errorText}
          label = 'Votre nom'
          control = {Input}>


        </Form.Field>
        <Form.Field
          type='email'
          id={'form-input-control-last-name'}
          required
          style={{paddingTop : '20px'}}
          label = 'Votre email'
          placeholder = 'Votre email'
          control = {Input}
          error={error}
          onBlur = {(event) => handleBlur(event)}
          onChange = {(event) => setEmail(event.target.value)}>

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
    showButtonDate : buttonDate => dispatch(showButtonDate(buttonDate)),
    setSuccess : success => dispatch(setSuccess(success))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(styled(EmailForm)`
  margin-top : 1em;
`)
