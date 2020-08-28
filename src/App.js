import React, {Component} from 'react';
import './App.css';

import EmailForm from './components/EmailForm'
import Calendar from './components/Calendar'
import AreaButton from './components/AreaButton'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookButton:'Je choisis ce créneau',
      events: null,
      email:null,
      isLoaded : false,
      card : '',
      infoCard : ''
    }
  }

 componentDidMount() {
    fetch("/.netlify/functions/authentify")
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            events : data.infosCal,
            isLoaded : true
          })
          console.log(this.state.events)
        },

        (error) => {
          this.setState({
            isLoaded : true,
            error
          })
        }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {email,card} = this.state

    fetch("/.netlify/functions/updateCalendar", {
      method: 'POST',
      body: JSON.stringify({
        email,
        card
      })
    })
  }

  handleChange = (event) => {
    const email = event.target.value
    this.setState({ email })
  }

  cardActive = (card) => {
    this.setState({card})
  }


  infoChild = (paramChild) => {
    this.setState({infoCard : paramChild})
  }


  render() {
    const {error, isLoaded, events, card} = this.state
    if (error) {
      return <div>Error : {error.message}</div>
    }



    return (
      <>
      <div className='box'>
        <div>
          <h2>Réservez un créneau avec Nicolas de Smile</h2>
        </div>


        {/* Ancien code avec la liste des carrés des événements
        <div className='areabutton'>
          {isLoaded ?
            (<AreaButton
            events={this.state.events}
            getInfos={(infos) => this.cardActive(infos)}
            cardId={this.state.card}/>)
          :
          <p>Loading...</p>
        }
        </div>
        */}


        <div className='areabutton'>
          {isLoaded ?
          (<Calendar
            events={events}>
          </Calendar>)
          :
          <p>Loading...</p>
        }
        </div>

        <div >
          <EmailForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}>
          </EmailForm>
        </div>
      </div>
      </>

    );
  }
}

export default App;
