import React, { Component } from 'react';
import Total from '../Total/Total';
import './Summary.css';

class Summary extends Component {

    render() {
        let summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
      
        return ( 
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });
      return(
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <Total 
            total={this.props.total}
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}
            />
          </section>
      )
    }
}

export default Summary; 