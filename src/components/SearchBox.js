import React, { Fragment } from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <Fragment>
            <input 
            className='text-gold ma2 pa3 ba b--black bg-dark-gray'
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            />
        </Fragment>
    );
}

export default SearchBox;
