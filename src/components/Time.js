import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import {setDefaultLocale, registerLocale} from "react-datepicker"

import styled from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";
import './Agenda.css';

import fr from "date-fns/locale/fr"
registerLocale("fr", fr)



const Time = (props) => {

  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className={props.className}>
      <DatePicker
        showPopperArrow={false}
        locale='fr'
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
        minDate={new Date()}
        showTimeSelect
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </div>
  )
}

export default styled(Time)`
margin : 1em;
`
