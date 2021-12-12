import React, { Component } from 'react';
import PlantsItem from './collectionItem';

// Class Home - Extends Component class
class Collection extends Component {

    render() {
        // Props - Used to access information passed from parent component
        // Map - Used to split the array
        return this.props.plants.map((plant)=>{
            return <PlantsItem plant={plant} key={plant._id}></PlantsItem>;
        });
    }
}

// Export Home class to use in App.js
export default Collection;