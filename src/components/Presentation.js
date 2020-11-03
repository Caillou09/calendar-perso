import React from 'react'
import styled from 'styled-components'
import profilePicture from '../images/image_nico.png'


import { Icon } from 'semantic-ui-react'

const Presentation = ({className}) => {
  return (
    <div className={className}>

        <div className={"identity"}>
          <img src={profilePicture} style={{paddingRight : "10px"}}></img>
          <h4>Nicolas Caillouet
          <br />Ingénieur Business Performance</h4>
        </div>

        <div className={"infoEvent"}>
          <p><Icon inverted color='blue' name = 'time' circular fitted/> 30 minutes</p>
          <p><Icon color='blue' name = 'setting' circular fitted inverted/> à distance via le lien dans le mail</p>
        </div>

      <div className={'infoText'}>
        <p>Bonjour,</p>
        <p>Vous pouvez ici prendre rendez-vous directement dans mon agenda à un créneau qui vous arrange.</p>
        <p>L'objectif de cet échange est de présenter Smile rapidement et d'échanger sur votre périmètre d'activité.</p>
      </div>

    </div>
  )
}

export default styled(Presentation)`
  grid-row-start : 2;
  grid-column-start : 1;
  justify-self : center;
  display : flex;
  flex-direction : column;
  align-items : start;
  text-align : center;


  img {
    width : 100px;
    height : auto;
  }

  p {
    text-align : left;
    padding : 0 20px;
  }

  .identity {
    display : flex;
    flex-direction : row;
    text-align : left;
  }

  .infoEvent {
    padding-top : 20px;
    color : #7b7C7C;
    font-size : 1.1em;
    font-weight : 600;
  }

  .infoText {
    padding-top : 20px;
    font-size : 1.1em;
    font-weight : 300;
  }

`
