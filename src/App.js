import React, {Component} from 'react';
import './App.css';

import EmailForm from './components/EmailForm'
import Calendar from './components/Calendar'
import AreaButton from './components/AreaButton'
import ReduxTest from './components/ReduxTest'

import { Provider } from 'react-redux'
import store from './redux/store'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:null,
      isLoaded : false,
    }
  }



  handleSubmit = (event) => {
    event.preventDefault()
    const {email} = this.state

    fetch("/.netlify/functions/updateCalendar", {
      method: 'POST',
      body: JSON.stringify({
        email
      })
    })
  }

  handleChange = (event) => {
    const email = event.target.value
    this.setState({ email })
  }


  render() {
    const {error, isLoaded} = this.state
    if (error) {
      return <div>Error : {error.message}</div>
    }



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
            <EmailForm
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}>
            </EmailForm>
          </div>
          <div>
          {/*  <ReduxTest>
            </ReduxTest>
            */}
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
