import React from 'react'
import styled from 'styled-components'
import profilePicture from '../images/image_nico.png'

import { connect } from 'react-redux'

import { Icon } from 'semantic-ui-react'

import getDay from 'date-fns/getDay'
import getDate from 'date-fns/getDate'
import getMonth from 'date-fns/getMonth'
import getHours from 'date-fns/getHours'
import getMinutes from 'date-fns/getMinutes'

const Presentation = ({className, showEmailForm, timeDate, success, step}) => {

  const daysArray = ['Dimanche', 'Lundi', 'Mardi', 'Mercerdi', 'Jeudi', 'Vendredi', 'Samedi']
  const monthsArray = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  return (
    <div className={className}>

        <div className={"identity"}>
          <img src={profilePicture} style={{paddingRight : "10px"}}></img>
          <h4 style={{margin : '0'}}>Nicolas Caillouet
          <br />Ingénieur Business Performance</h4>
        </div>

        <div className={"infoEvent"}>
          <p><Icon inverted color='blue' name = 'time' circular fitted/> 30 minutes</p>
          <p><Icon color='blue' name = 'setting' circular fitted inverted/> à distance via le lien dans le mail</p>
          { (showEmailForm || success) &&
            <p><Icon color='blue' name = 'calendar check outline' circular fitted inverted/> {daysArray[getDay(timeDate)]} {getDate(timeDate)} {monthsArray[getMonth(timeDate)]} à {getHours(timeDate)}h{getMinutes(timeDate) !== 0 ? getMinutes(timeDate) : "00" }</p>
          }
        </div>

      { (step === true) && <div className={'infoText'}>
        <p>Bonjour,</p>
        <p>Vous pouvez ici prendre rendez-vous directement dans mon agenda à un créneau qui vous arrange.</p>
        <p>L'objectif de cet échange est de présenter Smile rapidement et d'échanger sur votre périmètre d'activité.</p>
      </div>}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    timeDate : state.getTimeDate.timeDate,
    showEmailForm : state.showEmailForm.showEmailForm,
    success : state.setSuccess.success,
    step : state.getStep.step
  }
}

export default connect(mapStateToProps, null)(styled(Presentation)`
  grid-row-start : 2;
  grid-column-start : 1;
  justify-self : center;
  display : flex;
  flex-direction : column;
  align-self : top;
  text-align : center;


  img {
    max-width : 100px;
    height : auto;
  }

  @media (max-width : 768px) {
    padding : 30px 0;


    img{
      max-width : 75px;
      height : auto;
    }
  }

  p {
    text-align : left;
    padding : 0 20px;
  }

  .identity {
    display : flex;
    flex-direction : row;
    text-align : left;
    align-items : center;

  }

  .infoEvent {
    padding-top : 20px;
    color : #7b7C7C;
    font-size : 1.1em;
    font-weight : 600;
  }

  .infoText {
    padding-top : 20px;
    font-size : 1.1em;
    font-weight : 300;
  }

`)
