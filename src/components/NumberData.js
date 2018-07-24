import React from 'react';
import Helper from '../Helper';

const NumberData = ({ value, title, isCurrency = false, maxDigits = 1 }) => (
    <div className="number-data">
        <div className="number--value">{Helper.getDisplayNumber(value, isCurrency, maxDigits)}</div>
        <div className="number--title">{title}</div>
    </div>
);

export default NumberData;