import React from 'react';
import './card.styles.css';

function Card({monster}) {
    return (
        <div className="card-container">
            <img alt="monster-image" src={`https://robohash.org/${monster.id}?set=set2&size=170x190`} />
            <h3>{monster.name}</h3>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card
