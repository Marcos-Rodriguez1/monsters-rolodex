import React from 'react';

import './search-box.styles.css';

//Gets props and returns html 
//No internal state use a functional component 
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className='search'
    type='search' 
    placeholder= {placeholder}
    //When user types it starts the event 
    //Defines the function 
    onChange={handleChange}
    />
)