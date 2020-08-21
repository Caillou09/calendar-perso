import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import {setDefaultLocale, registerLocale} from "react-datepicker"

import styled from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";
import './Agenda.css';

import fr from "date-fns/locale/fr"
registerLocale("fr", fr)



const Agenda = (props) => {

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
        showDisabledMonthNavigation
      />
    </div>
  )
}

export default styled(Agenda)`
  text-align: center;
`
