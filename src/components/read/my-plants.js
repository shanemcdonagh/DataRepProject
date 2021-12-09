import React, { Component } from 'react';
import MyPlantsItem from './my-plants-item';
import Test from '../no-plants';

// Class Home - Extends Component class
class MyPlants extends Component {
    render() {
        
        var count = 0;

        // Increases count based on amount of plants in the array
        this.props.plants.map((plant) => {
            count++;
            return (console.log(count))
        })

        // If there are no plants...
        if(count === 0){
            return <Test></Test>
        }
        else{
        // Map - Used to split the array
        return this.props.plants.map((plant) => {
            // Returns MovieItem component and passes data to the MovieItem component
            // Each child in a list should have a unique "key" prop, therefore we use the imdbID
            return <MyPlantsItem plant={plant} key={plant._id} reloadData={this.props.reloadData} count={this.count}></MyPlantsItem>;
        });
        }

        
    }



}

// Export Home class to use in App.js
export default MyPlants;