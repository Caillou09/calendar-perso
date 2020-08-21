import React from 'react'
import PropTypes from 'prop-types'
import Agenda from "./Agenda"
import Time from "./Time"

import styled from 'styled-components'

const Calendar = ({className}) => {
  return (
    <div className={className}>
      <Agenda/>
      <Time/>
    </div>
  )
}

export default styled(Calendar)`
  display : flex;
  flex-direction : row;
  justify-content : center;

`
