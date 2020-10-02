import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

//The card list is responible for creating monsters 
export const CardList = (props) => {
    return <div className='card-list'>
    {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>;
};