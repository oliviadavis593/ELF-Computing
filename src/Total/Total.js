import React from 'react';
import './Total.css';

const Total = props => {
  const { total } = props;
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">{total}</div>
    </div>
  );
};

export default Total;
