import React from 'react'
import styled from 'styled-components'
import profilePicture from '../images/image_nico.png'

const Presentation = ({className}) => {
  return (
    <div className={className}>
      <img src={profilePicture}></img>
      <h4>Nicolas Caillouet
      <br />Ingénieur Business Performance</h4>
      <div>
        <p>Bonjour,</p>
        <p>Vous pouvez ici prendre rendez-vous directement dans mon agenda à un créneau qui vous arrange. </p>
      </div>
    </div>
  )
}

export default styled(Presentation)`
  justify-self : center;
  display : flex;
  flex-direction : column;
  align-items : center;
  text-align : center;


  img {
    width : 150px;
    height : auto;
  }

  p {
    padding : 0 40px;
    text-align : left;
  }

`
