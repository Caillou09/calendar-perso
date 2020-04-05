import React, {Component} from 'react'



const BoutonResa = ({details}) => {




    return(
      <div className='areaBouton'>
        <div className='infoArea'>
          <div className='date'>{details.start.date}</div>
          <div className='time'>{details.start.datetime}</div>
        </div>
        <button className='eventButton'>{this.state.bookButton}</button>
      </div>
    )

}

export default BoutonResa
