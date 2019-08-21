import React from 'react'

import Card from '../card/card.component'

import './card-list.styles.css'

const CardList = ({cardList}) => {
    return (
        <div className='card-list'>
            {
                cardList.map(card => (
                    <Card key={card.id} name={card.name} email={card.email} id={card.id} />
                ))
            }
        </div>
    )
}

export default CardList;