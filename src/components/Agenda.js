import React, {useState, useEffect} from 'react'

import { connect } from 'react-redux'
import { getStartDate, fetchEventsOfDay, showButtonDate } from '../redux'

import DatePicker from "react-datepicker"
import {registerLocale} from "react-datepicker"



import styled from 'styled-components';
import getDay from 'date-fns/getDay';
import set from 'date-fns/set'
import "react-datepicker/dist/react-datepicker.css";
import './Agenda.css';

import fr from "date-fns/locale/fr"
registerLocale("fr", fr)



const Agenda = ({
  className,
  getStartDate,
  pickedStartDate,
  fetchEventsOfDay,
  eventsOfDay,
  showButtonDate,
  buttonDate}) => {

  //Fonction pour rendre notclickable les samedi et dimanche
  const isWeekday = date => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};

  const [startDate, setStartDate] = useState(Date.parse(new Date()));
  const [data, setData] = useState("");

  const sendDate = (date) => {

    const dateToParse = set(new Date(date), {hours : 0, minutes : 0, seconds : 0})

    //On set l'heure de la date à 00:00 pour avoir le jour entier
    setStartDate(Date.parse(dateToParse))

    //On set showButtnoDate a false
    showButtonDate(false)
  }

//Récupération des événements de la date du jour avec netlify functions
  useEffect(() => {
    console.log(startDate)
    //On fait remonter le changement de state dans Redux
    getStartDate(startDate)
    fetchEventsOfDay(startDate)

  }, [startDate]);



  return (
    <div className={className}>
      <DatePicker
        filterDate={isWeekday}
        showPopperArrow={false}
        locale='fr'
        selected={startDate}
        onChange={(date) => sendDate(date)}
        inline
        minDate={new Date()}
        showDisabledMonthNavigation
        disabledKeyboardNavigation
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pickedStartDate : state.getStartDate.startDate,
    eventsOfDay : state.eventsOfDay.events
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStartDate : startDate => dispatch(getStartDate(startDate)),
    fetchEventsOfDay : startDate => dispatch(fetchEventsOfDay(startDate)),
    showButtonDate : buttonDate => dispatch(showButtonDate(buttonDate))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(styled(Agenda)`
  text-align: center;
`)
