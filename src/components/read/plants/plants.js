// Imports (React, Component and Local Components)
import React, { Component } from 'react';
import PlantsItem from './plantsItem';
import EmptyCollection from '../../conditions/emptyCollection';

// Class Plants - Extends Component class
class Plants extends Component {

    // Method - Visual content of the component
    render() {

        // Variable used to determine if passed array is empty
        var count = 0;

        // Increases count based on amount of plants in the array
        this.props.plants.map((plant) => {
            count++;
            return (console.log(count))
        })

        // If there are no plants...
        if (count === 0) {
            // Display the given component
            return <EmptyCollection></EmptyCollection>
        }
        else {
            // Map - Used to split the array
            return this.props.plants.map((plant) => {
                // Displays the PlantsItem component, passing it the plants, a unique identifier and a function
                return <PlantsItem plant={plant} key={plant._id} reloadData={this.props.reloadData}></PlantsItem>;
            });
        }
    }
}

// Export Plants class to use in readPlants.js
export default Plants;