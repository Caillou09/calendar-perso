import React, {Component} from 'react';
import './App.css';

import EmailForm from './components/EmailForm'
import Calendar from './components/Calendar'
import AreaButton from './components/AreaButton'

import { Provider } from 'react-redux'
import store from './redux/store'



const App = () => {


  return (
    <Provider store={store}>
      <div className='box'>
        <div>
          <h2>Réservez un créneau avec Nicolas de Smile</h2>
        </div>

        <div className='areabutton'>
          <Calendar></Calendar>
        </div>

        <div style={{paddingTop : "50px"}}>
          <EmailForm>
          </EmailForm>
        </div>
      </div>
    </Provider>

  );
}

export default App;
