import React from 'react';
import '../index.css';

const Square = props => {
    // console.log('Form Square: ', props.value);
    return (
        <button 
            className='square'
            onClick={ props.onClick }
        >
            { props.value }
        </button>
    );
}

export { Square };