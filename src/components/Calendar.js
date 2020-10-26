import React, {useState} from 'react'
import Agenda from "./Agenda"
import Time from "./Time"

import styled from 'styled-components'

const Calendar = ({className, sendData}) => {

  const [datePick, setDatePick] = useState(new Date());
  const [dataPick, setDataPick] = useState("")


  const getDatePick = (date) => {
    setDatePick(date)
  }

  const getDataPick = (data) => {
    setDataPick(data)
  }

  return (
    <div className={className}>
      <Agenda
        getDate = {(date) => getDatePick(date)}
        getData = {(data) => getDataPick(data)}/>
      <Time
        getDate = {datePick}
        getData = {dataPick}/>
    </div>
  )
}

export default styled(Calendar)`
  display : flex;
  flex-direction : row;
  justify-content : center;
  align-items : center;
`
