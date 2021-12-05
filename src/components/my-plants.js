import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Class Home - Extends Component class
class MyPlants extends Component { 
    // Method - This contains the visual content of the component
    render() {
        return (
        <div>
           <button href="/add-plant">Add plant</button>
        </div>);
    }
}

// Export Home class to use in App.js
export default MyPlants;