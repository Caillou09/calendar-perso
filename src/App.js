import React, {Component} from 'react';
import './App.css';

import BoutonResa from './components/BoutonResa'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse:'',
      email:''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('prout')
  }

  handleChange = (event) => {
    const email = event.target.value
    this.setState({ email })
  }

  render() {
    return (
      <div className='box'>
        <div>
          <h2>Réservez un créneau avec Nicolas de Smile</h2>
        </div>
        <div >
          <BoutonResa></BoutonResa>
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
