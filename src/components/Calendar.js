import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux'
import {getStep, setEmailForm} from '../redux'

import Agenda from "./Agenda"
import Time from "./Time"
import EmailForm from "./EmailForm"

import getDay from 'date-fns/getDay'
import getDate from 'date-fns/getDate'
import getMonth from 'date-fns/getMonth'
import getHours from 'date-fns/getHours'
import getMinutes from 'date-fns/getMinutes'

import {Button, Popup, Loader, Dimmer, Segment} from 'semantic-ui-react'

import styled from 'styled-components'

const Calendar = ({
  className,
  sendData,
  getStep,
  startDate,
  timeDate,
  buttonDate,
  active,
  setEmailForm}) => {

  const [datePick, setDatePick] = useState(new Date());
  const [dataPick, setDataPick] = useState("");
  const [step, setStep] = useState(true)
  const [showEmailForm, setShowEmailForm] = useState(false)

  const daysArray = ['Dimanche', 'Lundi', 'Mardi', 'Mercerdi', 'Jeudi', 'Vendredi', 'Samedi']
  const monthsArray = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  useEffect( () => {
    getStep(step)
    setEmailForm(showEmailForm)
  }, [step])

  return (
          <div className={className}>
            <h4>Sélectionnez la date et l'heure</h4>
            <div className={'classCalendar'}>
              <Agenda/>
              <Dimmer.Dimmable active={active}>
                  <Time/>
                  <Dimmer active={active} inverted>
                    <Loader />
                  </Dimmer>
              </Dimmer.Dimmable>
            </div>
            <div style={{paddingTop : "20px", display : 'flex', justifyContent : 'center'}}>
              {
                buttonDate == true ?
                <Button fluid = {false} onClick = {() => {
                    setStep(false)
                    setShowEmailForm(true)
                  }}>
                  Choisir le {daysArray[getDay(startDate)]} {getDate(startDate)} {monthsArray[getMonth(startDate)]} à {getHours(timeDate)}h{getMinutes(timeDate) !== 0 ? getMinutes(timeDate) : "00" }
                </Button>
                :
                <Popup
                  content="Vous n'avez pas choisi d'horaire"
                  on='click'
                  pinned
                  centered
                  position='top center'
                  trigger ={
                    <Button fluid = {false} style={{textAlign : 'middle'}}>
                      Choisir un créneau horaire
                    </Button>
                  }>
                </Popup>
              }

            </div>
          </div>


  )
}

const mapStateToProps = state => {
  return {
    startDate : state.getStartDate.startDate,
    timeDate : state.getTimeDate.timeDate,
    buttonDate : state.showButtonDate.buttonDate,
    active : state.eventsOfDay.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStep : step => dispatch(getStep(step)),
    setEmailForm : showEmailForm => dispatch(setEmailForm(showEmailForm))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(styled(Calendar)`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  color: #212121;
  grid-row-start : 2;
  grid-column-start : 2;

  .classCalendar{
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
  }

  @media(max-width : 768px) {
    text-align : center;

    .classCalendar  {
      flex-direction : column;
    }
  }

`)
