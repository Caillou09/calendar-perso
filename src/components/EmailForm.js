import React, {useEffet, useState} from 'react'
import PropTypes from 'prop-types'
import '../App.css';

const EmailForm = ({onSubmit, onChange}) => {
  return (
    <div>
      <form
        className='formResa'
        onSubmit={onSubmit}>
        <input
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder='votre adresse mail'
          className='inputResa'
          onChange={onChange}/>
        <button type='submit' className='boutonResa'>Créer rendez-vous</button>
      </form>
    </div>
  )
}

export default EmailForm
