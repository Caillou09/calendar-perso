import React, {Component} from 'react';
import './App.css';

import EmailForm from './components/EmailForm'
import CalendarForm from './components/CalendarForm'
import AreaButton from './components/AreaButton'
import Presentation from './components/Presentation'
import SectionPrincipale from './themes/SectionPrincipale'
import ContainerPrincipal from './themes/ContainerPrincipal'
import Header from './components/Header'

import { Provider } from 'react-redux'
import store from './redux/store'

import logoSmile from './images/logo_smile.png'



const App = () => {


  return (
    <Provider store={store}>
    <ContainerPrincipal>
      <SectionPrincipale>
        <Header></Header>
        <Presentation></Presentation>
        <CalendarForm></CalendarForm>
        <a target="_blank" href="https://www.smile.eu/fr" style={{
            gridRowStart : "1",
            gridColumnStart : 2,
            justifySelf : 'end',

          }}>
          <img src={logoSmile} style={{
            width : '100px',
            height : 'auto'}}/>
        </a>
      </SectionPrincipale>
    </ContainerPrincipal>
    </Provider>

  );
}

export default App;
