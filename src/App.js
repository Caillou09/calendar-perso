import React, {Component} from 'react';
import './App.css';

import BoutonResa from './components/BoutonResa'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookButton:'Je choisis ce créneau',
      events: null,
      isLoaded : false,
      card : '',
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
  }

  handleChange = (event) => {
    const email = event.target.value
    this.setState({ email })
  }

  cardActive = (keyCard) => {
    this.setState({card : keyCard})
  }

  render() {
    const {error, isLoaded, events} = this.state
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
          Object.keys(events).map( (keyName, i) => {
            return(
              <BoutonResa key={i} details={events[i]} onClick={ () => this.cardActive(i)} isActive={this.state.card===i ? true : false}>
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
