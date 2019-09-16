import React from 'react';
import './card.styles.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.data.id}?set=set2&size=180x180`} />
            <h2>{props.data.name}</h2>
            <p>{props.data.email}</p>
        </div>
    );
};