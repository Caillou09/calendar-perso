import React from 'react'
import BoutonResa from './BoutonResa'

const AreaButton = ({events, cardId, getInfos }) => {



  return (
    <div className='areaBouton'>
    {

      (events).map((event, i) => {
        const didClick = () => getInfos(event)
        return (
          <BoutonResa
            key={event.id}
            details={event}
            onClick={didClick}
            isActive={cardId.id === event.id}>
          </BoutonResa>
        )
      })
    }
    </div>
  );
};

export default AreaButton
