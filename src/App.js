import React, {Component} from 'react';
import './App.css';

import BoutonResa from './components/BoutonResa'




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
            events : data.test,
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
    //   .then(response => response.json())
    //   .then(
    //     (data) => {
    //       this.setState({
    //         events : data.test,
    //         isLoaded : true
    //       })
    //       console.log(this.state.events)
    //     },
    //
    //     (error) => {
    //       this.setState({
    //         isLoaded : true,
    //         error
    //       })
    //     }
    // )
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
    const {error, isLoaded, events,card} = this.state
    if (error) {
      return <div>Error : {error.message}</div>
    }

    return (
      <div className='box'>
        <div>
          <h2>Réservez un créneau avec Nicolas de Smile</h2>
        </div>
        <div className='areaBouton'>
        {isLoaded ? (
          (events).map((event, i) => {
            const didClick = () => this.cardActive(event)
            return(
              <BoutonResa
                key={event.id}
                details={event}
                onClick={didClick}
                isActive={card.id===event.id}>
              </BoutonResa>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
        </div>
        <div >
          <form
            className='formResa'
            onSubmit={this.handleSubmit}>
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder='votre adresse mail'
              className='inputResa'
              onChange={this.handleChange}/>
            <button type='submit' className='boutonResa'>Créer rendez-vous</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
