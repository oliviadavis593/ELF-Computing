import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import slugify from 'slugify';

import './Features.css';

class Features extends Component {
  render() {
    return (
      <>
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {Object.keys(this.props.features).map((feature, index) => {
            const featureHash = `${feature}-${index}`;
            const options = this.props.features[feature].map(item => {
              const hash = slugify(JSON.stringify(item));
              const isChecked = item.name === this.props.selected[feature].name;
              return (
                <Feature
                  hash={hash}
                  slug={slugify(feature)}
                  isChecked={isChecked}
                  itemName={item.name}
                  itemCost={this.props.USCurrencyFormat.format(item.cost)}
                  updateFeature={this.props.updateFeature}
                  item={item}
                  feature={feature}
                />
              );
            });

            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          })}
        </form>
      </>
    );
  }
}

export default Features;
