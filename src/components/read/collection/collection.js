// Imports ( React, Component and Local Component)
import React, { Component } from 'react';
import CollectionItem from './collectionItem';

// Class Collection - Extends Component class
class Collection extends Component {

    render() {
        // Props - Used to access information passed from parent component
        // Map - Used to split the array
        return this.props.plants.map((plant)=>{
            // Display CollectionItem component, passing it the plants and their individual identifiers (their id)
            return <CollectionItem plant={plant} key={plant._id}></CollectionItem>;
        });
    }
}

// Export Collection class for use in readCollection.js
export default Collection;