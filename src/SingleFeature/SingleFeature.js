import React, { Component } from 'react';
import './SingleFeature.css';
import slugify from 'slugify';


class SingleFeature extends Component {

  render() {
      const options = this.props.features[this.props.feature].map(item => {
        return(
          <div key={this.props.itemHash} className="feature__item">
            <input 
            type="radio"
            id={this.props.itemHash}
            className="feature__option"
            name={slugify(this.props.feature)}
            checked={item.name === this.props.selected[this.props.feature].name}
            onChange={e => this.props.updateFeature(this.props.feature, item)}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });
  
      return(
        <div>
          {options}
        </div>
      )
  }
}

export default SingleFeature; 