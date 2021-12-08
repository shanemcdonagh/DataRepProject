// Imports
import React, { Component } from 'react';
import Plants from './plants';
import axios from 'axios';

// Class Read - extends Component class
class ReadPlants extends Component {

    // Called everytime component becomes active in view
    componentDidMount() {
        // Promise - Result of an asynchronous operation
        // Axios - Promise based HTTP client
        axios.get('http://localhost:4000/plants')
            .then((response) => {
                this.setState({ plants: response.data })
            })
            .catch((error) => {
                console.log("Bruh");
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
                {/* Displaying and passing data from state object to the Movie component */}
                <Plants plants={this.state.plants}></Plants>
            </div>
        );
    }

}

// Export component for use elsewhere
export default ReadPlants;