import React, {useState, useEffect} from 'react'

import { connect } from 'react-redux'

import DatePicker from "react-datepicker"
import {registerLocale} from "react-datepicker"

import styled from 'styled-components';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import './Agenda.css';

import fr from "date-fns/locale/fr"
registerLocale("fr", fr)




const Time = ({className, getDate, getData, pickedStartDate,eventsOfDay}) => {

  const [timeDate, setTimeDate] = useState("")
  const [eventsPick, setEventsPick] = useState([])


  useEffect( () => {
    console.log(pickedStartDate)
    setTimeDate(pickedStartDate)
  }, [pickedStartDate])

  useEffect( () => {
    console.log(eventsOfDay)
    setEventsPick(eventsOfDay)
  }, [eventsOfDay])

//On va chercher les start et end de chaque event dans l'agenda pour les mettre dans un tableau
  const arrayEvents = []
  if (eventsPick.length !== 0) {
        eventsPick.map( (event) => {
          arrayEvents.push([new Date(event.start.dateTime), new Date(event.end.dateTime)])
        })
  }

  //Fonction pour gérer les Temps exclus à la selection du client
  const excludeTime = (array) => {
    const arrayDates = [];
    const arrayDatesFormated = [];


    //Fonction pour transformer la date au bon format pour la props ExcludeTimes du react DatePicker
    const formatDate = (date) => {
      let minutes = (new Date(date)).getMinutes()
      let hours = (new Date(date)).getHours()
      let dateFormated = setHours(setMinutes(new Date(date),minutes), hours);
      return dateFormated
    }
    arrayEvents.forEach( (arrayEvent) => {
      let startDate = arrayEvent[0]
      let endDate = arrayEvent[1]
      const arrayIterations = [];


      //si jamais le temps de début est entre la pile et la demie
      if (startDate.getMinutes()>0 && startDate.getMinutes()<30) {
      //On rapport le temps à la pile pour fixer cet horaire comme indisponible
        let newStartDate = startDate.setMinutes(0,0)
        arrayDates.push(newStartDate)
        arrayIterations.push(newStartDate)

      //si jamais le temps de début est supérieur à la demie
      } else if (startDate.getMinutes()>30) {
          let newStartDate = startDate.setMinutes(30,0)
          arrayDates.push(newStartDate)
          arrayIterations.push(newStartDate)
      } else {
        arrayDates.push(startDate)
        arrayIterations.push(startDate)
      }
      if (endDate.getMinutes()>0 && endDate.getMinutes()<30) {
        let newEndDate = endDate.setMinutes(30,0)
        arrayDates.push(newEndDate)
        arrayIterations.push(newEndDate)
      } else if (endDate.getMinutes()>30) {
          let newEndDate = endDate.setHours((endDate.getHours()+1),0)
          arrayDates.push(newEndDate)
          arrayIterations.push(newEndDate)
      } else {
        arrayDates.push(endDate)
        arrayIterations.push(endDate)
      }

      //On calcule le nombre de créneau de 30min à rendre indisponible
      let iterationIndispo = ((arrayIterations[1].getTime()/1000 - arrayIterations[0].getTime()/1000)/1800);

      if (iterationIndispo > 1) {
        for (let i = iterationIndispo; i>1; i--) {
          let datePush = arrayIterations[0].getTime() + 1800*1000*(i-1)
          arrayDates.splice(1, 0, datePush)
        }
      }
    })
    //on trie les dates de l'array de manière croissante
    arrayDates.sort(function(a,b){return a - b})

    arrayDates.forEach( (date) => {
      arrayDatesFormated.push(formatDate(date));
    })

    return arrayDatesFormated
  }

  return (
    <div className={className}>
      <DatePicker
        showPopperArrow={false}
        locale='fr'
        selected={timeDate}
        onChange={(date) => setTimeDate(date)}
        minTime={setHours(setMinutes(new Date(), 30), 8)}
        maxTime={setHours(setMinutes(new Date(), 30), 18)}
        inline
        excludeTimes={[
          ...excludeTime(arrayEvents),
          setHours(setMinutes(new Date(), 30), 12),
          setHours(setMinutes(new Date(), 0), 13),
          setHours(setMinutes(new Date(), 30), 13)
        ]}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
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

export default connect(mapStateToProps)(styled(Time)`
margin : 1em;
`)
