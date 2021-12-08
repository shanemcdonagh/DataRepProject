import React, { Component } from 'react';
import MyPlantsItem from './my-plants-item';

// Class Home - Extends Component class
class MyPlants extends Component {


    render() {
        // Props - Used to access information passed from parent component
        // Map - Used to split the array
        return this.props.plants.map((plant)=>{
            // Returns MovieItem component and passes data to the MovieItem component
            // Each child in a list should have a unique "key" prop, therefore we use the imdbID
            return <MyPlantsItem plant={plant} key={plant._id} reloadData={this.props.reloadData}></MyPlantsItem>;
        });
    }
  

}

// Export Home class to use in App.js
export default MyPlants;