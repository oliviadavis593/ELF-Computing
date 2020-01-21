import React, { Component } from 'react';
import Option from '../Option/Option';
import Total from '../Total/Total';
import './Summary.css';

class Summary extends Component {

  render() {
    const total = this.props.USCurrencyFormat.format(
      Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0,
      ),
    );
    const options = Object.keys(this.props.selected).map((feature, idx) => {
      const hash = `${feature}-${idx}`;
      const selected =  this.props.selected[feature];
      return(
        <Option 
        hash={hash}
        feature={feature}
        name={selected.name}
        cost={this.props.USCurrencyFormat.format(selected.cost)}
        />
      );
    });

    return(
      <div>
        {options}
        <Total 
        total={total}
        />
      </div>
    )
  }
}

export default Summary; 