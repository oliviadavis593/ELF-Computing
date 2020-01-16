import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {

    render() {
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  
                </div>
              </div>
            );
          });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
            </section>
        )
    }
}

export default Summary; 

/*
TO DO: How to put in the {summary} & {USCurrencyFormat.format(total)}
*/