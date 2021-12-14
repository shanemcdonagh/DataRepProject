// Imports (React, Component, and Bootstrap element)
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

// Class EmptyCollection - Extends Component class
class EmptyCollection extends Component {

    // Method - Visual content of class
    render() {
       return(
       <div className='noPlants'>
        <h1>No plants have been added!</h1>
        <Button variant="success" href="/add-plant">Add a Plant</Button>
       </div>)
    }
}

// Export EmptyCollection class for use in plants.js
export default EmptyCollection;