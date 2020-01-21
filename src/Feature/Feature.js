import React from 'react';
import './Feature.css'

export default props => {
  const { isChecked, hash, slug, itemName, itemCost, feature, item, updateFeature } = props;

  return (
    <div key={hash} className="feature__item">
      <input
        type="radio"
        id={hash}
        className="feature__option"
        name={slug}
        checked={isChecked}
        onChange={e => updateFeature(feature, item)}
      />
      <label htmlFor={hash} className="feature__label">
        {itemName} ({itemCost})
      </label>
    </div>
  );
};
