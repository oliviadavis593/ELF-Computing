import React, { Component } from 'react';
import Features from '../Features/Features'
import './Options.css';

class Options extends Component {

    render() {
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features 
                features={this.props.features} 
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
                USCurrencyFormat={this.props.USCurrencyFormat}
                />
            </form>
        )
    }
}

export default Options;  