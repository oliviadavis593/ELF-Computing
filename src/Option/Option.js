import React from 'react';

export default props => {
  const { name, hash, cost, feature } = props;

  return (
    <div className="summary__option" key={hash}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{name}</div>
      <div className="summary__option__cost">{cost}</div>
    </div>
  );
};
