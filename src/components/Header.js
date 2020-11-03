import React from 'react'
import styled from 'styled-components'

const Header = ({className}) => {
  return (
    <div className={className}>
      <p>Rendez-vous de 30min avec Nicolas</p>
    </div>
  )
}

export default styled(Header) `
  grid-row-start : 1;
  grid-row-end : 2;
  grid-column-start : 1;
  grid-column-end : span end;

  p {
    color : #76797c;
    font-size : 1.7em;
    font-weight : 600;
  }

`
