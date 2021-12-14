// Imports (React, Component, and Local Components)
import React, { Component } from 'react';
import WaterItem from './waterItem';
import NoneToWater from '../../conditions/noneToWater';

// Class ToWater - Extends Component class
class ToWater extends Component {

    // Method - Visual content of the component
    render() {
        // Props - Used to access information passed from parent component
        // Map - Used to split the array

        // Variable - Used to determine if passed array is empty
        var count = 0;

        // Increases count based on amount of plants returned in the array (plants to water)
        this.props.plants.map((plant) => {
            count++;
            return (console.log(count))
        })

        // If there are no plants...
        if (count === 0) {
            // Display the suitable component
            return <NoneToWater></NoneToWater>
        }
        else {
            return this.props.plants.map((plant) => {
                // Display the WaterItem component, passing it the plants and their unique identifier
                return <WaterItem plant={plant} key={plant._id}></WaterItem>;
            });
        }

    }
}

// Export ToWater class to use in readToWater.js
export default ToWater;