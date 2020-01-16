import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {

    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <div className="summary__total">
                    <div className="summary__total__value">Total</div>
                    <div className="summary__total__value">
                        {/*USCurrencyFormay.format(total) */}
                    </div>
                </div>
            </section>
        )
    }
}

export default Summary; 

/*
TO DO: How to put in the {summary} & {USCurrencyFormat.format(total)}
*/