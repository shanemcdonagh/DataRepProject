// Imports (React, Component, Local Component and Axios)
import React, { Component } from 'react';
import Plants from './plants';
import axios from 'axios';

// Class ReadPlants - extends Component class
class ReadPlants extends Component {

    //Constructor - Initialises component
    constructor() {
        // Invoke parent constructor
        super();

        // Bind - Binds function call to specific reference for invoking
        this.reloadData = this.reloadData.bind(this);
    }

    // Method - Used to reload the page after plant has been added/deleted
    reloadData() {
        // Retrieve data from the server and...
        axios.get("http://localhost:4000/my-plants")
            .then((response) => {
                // pass it to the plants array
                this.setState({ plants: response.data })
            })
            .catch((error) => {
                // Else, output error to console
                console.log(error);
            });
    }

    // Method - Method gets called whenever component becomes visible (inserted into DOM)
    componentDidMount() {
        // Retrieve data from the server and...
        axios.get("http://localhost:4000/my-plants")
            .then((response) => {
                // pass it to the plants array
                this.setState({ plants: response.data })
            })
            .catch((error) => {
                // Else, output error to console
                console.log(error);
            });
    }

        // Object designed to hold data within a class
        state = {
            plants: []
        };

    // Method - Visual aspect of component
    render() {

        return (
            <div>
                {/* Displaying the Plants component, while passing it the plants received and the function to reload */}
                <Plants plants={this.state.plants} reloadData = {this.reloadData}></Plants>
            </div>
        );
    }
}

// Export ReadPlants for use in App.js
export default ReadPlants;