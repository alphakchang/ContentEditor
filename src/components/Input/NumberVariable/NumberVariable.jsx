import React from 'react';
import './NumberVariable.css';

const NumberVariable = ({onNumberChange}) => {
    return (
        <input type="number" className="form-control numberInput" onChange={onNumberChange}></input>
    );
}

export default NumberVariable;