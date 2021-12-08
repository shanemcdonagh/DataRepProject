// Imports
import React, { Component } from 'react';
import MyPlants from './my-plants';
import axios from 'axios';

// Class Read - extends Component class
class ReadMyPlants extends Component {

    //Constructor
    constructor() {
        // Invoke parent constructor
        super();

        this.reloadData = this.reloadData.bind(this);
    }

    // Method - Reload page after item has been added/deleted
    reloadData() {
        // Retrieve data from the server and...
        axios.get("http://localhost:4000/my-plants")
            .then((response) => {
                // pass it to the movies array
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
                // pass it to the movies array
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
        };z

    // Method - Visual aspect of component
    render() {

        return (
            <div>
                {/* Displaying and passing data from state object to the Movie component */}
                <MyPlants plants={this.state.plants} reloadData = {this.reloadData}></MyPlants>
            </div>
        );
    }

}

// Export component for use elsewhere
export default ReadMyPlants;