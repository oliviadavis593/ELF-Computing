import React, { Component } from 'react';
import Features from '../Features/Features'
import './Options.css';

class Options extends Component {

    render() {
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features />
            </form>
        )
    }
}

export default Options; 