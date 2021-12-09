import React, { Component } from 'react';
import WaterItem from './water-item';

// Class Home - Extends Component class
class WaterOn extends Component {

    render() {
        // Props - Used to access information passed from parent component
        // Map - Used to split the array
        return this.props.plants.map((plant)=>{
            return <WaterItem plant={plant} key={plant._id}></WaterItem>;
        });
    }
}

// Export Home class to use in App.js
export default WaterOn;