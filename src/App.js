import React, {Component} from 'react';
import './App.css';

import EmailForm from './components/EmailForm'
import Calendar from './components/Calendar'
import AreaButton from './components/AreaButton'
import Presentation from './components/Presentation'
import SectionPrincipale from './themes/SectionPrincipale'
import ContainerPrincipal from './themes/ContainerPrincipal'
import Header from './components/Header'

import { Provider } from 'react-redux'
import store from './redux/store'



const App = () => {


  return (
    <Provider store={store}>
    <ContainerPrincipal>
      <SectionPrincipale>
        <Header></Header>
        <Presentation></Presentation>
        <div className='box'>
          <div className='areabutton'>
            <Calendar></Calendar>
          </div>
          <div style={{paddingTop : "50px"}}>
            <EmailForm>
            </EmailForm>
          </div>
        </div>
      </SectionPrincipale>
    </ContainerPrincipal>
    </Provider>

  );
}

export default App;
