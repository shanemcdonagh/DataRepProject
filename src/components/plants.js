import React, { Component } from 'react';
import PlantsItem from './plants-item';
import axios from 'axios';

// Class Home - Extends Component class
class Plants extends Component {

    
    state = {
        plants: []
    };

    // Called everytime component becomes active in view
    componentDidMount(){
        // Promise - Result of an asynchronous operation
        // Axios - Promise based HTTP client
        axios.get('http://localhost:4000/plants')
        .then((response) => {
            this.setState({plants: response.data})
        })
        .catch((error) =>{
            console.log("Bruh");
        })

    }
   
   
    // Method - This contains the visual content of the component
    render() {
        // Map - Breaks up collection into individual items
        return this.state.plants.map((plant) =>{
            return <PlantsItem plant={plant}></PlantsItem>
        })
    }
}

// Export Home class to use in App.js
export default Plants;