// Imports (React, Component, Local Component, and Axios)
import React, { Component } from 'react';
import Collection from './collection';
import axios from 'axios';

// Class ReadCollection - extends Component class
class ReadCollection extends Component {

    // Method - Called everytime component becomes active in view
    componentDidMount() {
        // Promise - Result of an asynchronous operation
        // Axios - Promise based HTTP client
        axios.get('http://localhost:4000/collection')
            .then((response) => {
                this.setState({ plants: response.data }) // Set current state to retrieved data
            })
            .catch((error) => {
                console.log("Cannot retrieve information from server");
            })
    }

    // Object designed to hold data within a class
    state = {
        plants: []
    };

    // Method - Visual aspect of component
    render() {

        return (
            <div>
                {/* Displaying and passing data from state object to the Collection component */}
                <Collection plants={this.state.plants}></Collection>
            </div>
        );
    }

}

// Export ReadCollection for use in App.js
export default ReadCollection;