import React, { Component } from 'react';
import './Options.css';

class Options extends Component {

    render() {
        const options = this.props.features[feature].map(item => {
            return(
                <legend>
                    {options}
                </legend>
            );
        });
    }
}

export default Options; 