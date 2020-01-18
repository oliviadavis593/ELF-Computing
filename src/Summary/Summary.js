import React, { Component } from 'react';
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
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {/*this.props.USCurrencyFormat.format(total)*/}
              </div>
            </div>
          </section>
      )
    }
}

export default Summary; 



