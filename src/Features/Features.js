import React, { Component} from 'react';
import './Features.css';
import SingleFeature from '../SingleFeature/SingleFeature';




class Features extends Component {
    
    render() {
      return Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx; 
        return(
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
              <SingleFeature />
            </legend>
          </fieldset>
        )
      })
    }
}

export default Features;