import React, { Component } from 'react';
import WaterItem from './water-item';
import NoWater from '../no-water';

// Class Home - Extends Component class
class WaterOn extends Component {

    render() {
        // Props - Used to access information passed from parent component
        // Map - Used to split the array
        var count = 0;

        // Increases count based on amount of plants returned in the array (plants to water)
        this.props.plants.map((plant) => {
            count++;
            return (console.log(count))
        })

        // If there are no plants...
        if (count === 0) {
            return <NoWater></NoWater>
        }
        else {
            return this.props.plants.map((plant) => {
                return <WaterItem plant={plant} key={plant._id}></WaterItem>;
            });
        }

    }
}

// Export Home class to use in App.js
export default WaterOn;