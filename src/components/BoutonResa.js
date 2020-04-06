import React from 'react'



const BoutonResa = ({details, onClick}) => {

  const dateAnnee = details.start.dateTime.slice(0,3)
  const dateInfo = details.start.dateTime
    .slice(5,10)
    .split(/(-)/g)
    .reverse()
    .join("")
    .replace('-', '/')


  const horaireDebut = details.start.dateTime.slice(11,16)
  const horaireFin = details.end.dateTime.slice(11,16)

    return(
      <div className ='card'>
          <div className='date'>{dateInfo}</div>
          <div className='time'>de {horaireDebut} à {horaireFin}</div>
      </div>
    )

}

export default BoutonResa
