import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker"
import {registerLocale} from "react-datepicker"

import styled from 'styled-components';
import getDay from 'date-fns/getDay';
import "react-datepicker/dist/react-datepicker.css";
import './Agenda.css';

import fr from "date-fns/locale/fr"
registerLocale("fr", fr)



const Agenda = ({className, getDate, getData}) => {

  const isWeekday = date => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};

  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const sendDate = (date) => {
    //On fait remonter les states pour les utiliser dans sibling component Time.js
    getDate(date)
    //On set l'heure de la date à 00:00 pour avoir le jour entier
    setStartDate(new Date(date.setHours(0,0,0)))
  }

//Récupération des événements de la date du jour avec netlify functions
  useEffect(() => {
    fetch("/.netlify/functions/getEventsOfDay", {
      method: 'POST',
      body : startDate
    })
    .then(response => response.json())
    .then(
      (data) => {
        setData(data.infosCalOfDay)
        getData(data.infosCalOfDay)
      })



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

export default styled(Agenda)`
  text-align: center;
`
