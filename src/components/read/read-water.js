import React, { Component } from 'react';
import axios from 'axios';
import WaterOn from './water';
import '../../styling/plants-item.css';


// Class Home - Extends Component class
class ReadWaterPlants extends Component {

    // // Object designed to hold data within a class
    state = {
        plants: []
    };

    // Method - Method gets called whenever component becomes visible (inserted into DOM)
    componentDidMount() {
        // Retrieve data from the server and...
        axios.get("http://localhost:4000/today")
            .then((response) => {
                // pass it to the plants array
                this.setState({ plants: response.data })
                console.log(this.state.plants)
            })
            .catch((error) => {
                // Else, output error to console
                console.log(error);
            });
    }

    // Method - This contains the visual content of the component
    render() {

         // Retrieves the day of the week and converts to a String
         var date = new Date();
         var weekday = date.toLocaleString("default", { weekday: "long" })
 
        return (
            <div>
                {/* Displaying and passing data from state object to the Water component */}
                <h2>It is {weekday}, time to water:</h2>
                <WaterOn plants={this.state.plants}></WaterOn>
            </div>
        );
    }
}

// Export Home class to use in App.js
export default ReadWaterPlants;