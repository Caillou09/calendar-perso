import React from 'react'
import styled from 'styled-components'



const Header = ({className}) => {
  return (
    <div className={className}>
      <h2 className={'title'}>Rendez-vous de 30min avec Nicolas</h2>

    </div>
  )
}

export default styled(Header) `
  grid-row-start : 1;
  grid-row-end : 2;
  grid-column-start : 1;
  grid-column-end : span end;
  text-align : center;

  .title {
    position : relative;
  }

  .title:after{
    position : absolute;
    content : "";
    height : 3px;
    width : 50%;
    bottom : -10px;
    margin : 0 auto;
    left : 0;
    right : 0;

    background : #FF8054;
  }

`
