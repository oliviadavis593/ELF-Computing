import React, { Component } from 'react';

class Total extends Component {
    render() {
        return(
            <div className="summary__total">
                    <div className="summary__total__value">Total</div>
                    <div className="summary__total__value">
                        {/*USCurrencyFormay.format(total) */}
                    </div>
                </div>
        )
    }
}

export default Total; 