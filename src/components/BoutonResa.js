import React, {Component} from 'react'



class BoutonResa extends Component {

  state = {
    prout : '',
    auth : ''
  }

  componentDidMount() {
    fetch("/.netlify/functions/fetch-calendar")
      .then(response => response.json())
      .then(response => this.setState({ prout : response.res }))
    fetch("/.netlify/functions/authentify")
      .then(response => response.json())
      .then(data => console.log(data.test))
  }

  render() {
    return(
      <div className='areaBouton'>
        <button className='eventButton'>{this.state.prout}</button>
      </div>
    )
  }
}

export default BoutonResa
