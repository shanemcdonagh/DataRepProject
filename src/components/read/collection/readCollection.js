// Imports
import React, { Component } from 'react';
import Collection from './collection';
import axios from 'axios';

// Class Read - extends Component class
class readCollection extends Component {

    // Called everytime component becomes active in view
    componentDidMount() {
        // Promise - Result of an asynchronous operation
        // Axios - Promise based HTTP client
        axios.get('http://localhost:4000/collection')
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
                <Collection plants={this.state.plants}></Collection>
            </div>
        );
    }

}

// Export component for use elsewhere
export default readCollection;