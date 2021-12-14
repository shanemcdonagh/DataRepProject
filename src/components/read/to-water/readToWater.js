// Imports (React, Component, Axios and Local Component)
import React, { Component } from 'react';
import axios from 'axios';
import ToWater from './toWater';


// Class ReadToWater - Extends Component class
class ReadToWater extends Component {

    // Object designed to hold data within a class
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
            })
            .catch((error) => {
                // Else, output error to console
                console.log(error);
            });
    }

    // Method - This contains the visual content of the component
    render() {

         // Retrieves the day of the week and converts to a String
         // REF: https://coderrocketfuel.com/article/get-the-name-of-the-current-weekday-in-vanilla-javascript
         var date = new Date();
         var weekday = date.toLocaleString("default", { weekday: "long" })
 
        return (
            <div className='readToWater'>
                {/* Displaying and passing data from state object to the ToWater component */}
                <h2>It is {weekday}, time to water:</h2>
                <ToWater plants={this.state.plants}></ToWater>
            </div>
        );
    }
}

// Export ReadToWater class to use in home.js
export default ReadToWater;