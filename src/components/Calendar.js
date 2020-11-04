import React, {useState} from 'react'
import Agenda from "./Agenda"
import Time from "./Time"
import EmailForm from "./EmailForm"

import {Button} from 'semantic-ui-react'

import styled from 'styled-components'

const Calendar = ({className, sendData}) => {

  const [datePick, setDatePick] = useState(new Date());
  const [dataPick, setDataPick] = useState("")

  const daysArray = ['Dimanche', 'Lundi', 'Mardi', 'Mercerdi', 'Jeudi', 'Vendredi', 'Samedi']

  const getDatePick = (date) => {
    setDatePick(date)
  }

  const getDataPick = (data) => {
    setDataPick(data)
  }

  return (
    <div className={className}>
      <h4>Sélectionnez la date et l'heure</h4>
      <div className={'classCalendar'}>
        <Agenda
          getDate = {(date) => getDatePick(date)}
          getData = {(data) => getDataPick(data)}/>
        <Time
          getDate = {datePick}
          getData = {dataPick}/>
      </div>
      <div style={{paddingTop : "20px"}}>
        <Button fluid>Choisir le</Button>
      </div>
    </div>
  )
}

export default styled(Calendar)`
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

`
