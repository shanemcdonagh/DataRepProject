import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styling/home.css';

// Class Home - Extends Component class
class Home extends Component {

    // Method - This contains the visual content of the component
    render() {
        return (<div id="home">

            {/* Used the website https://www.fontspace.com/category/plants for the writing for the header */}
            <a href="https://www.fontspace.com/category/leaves"><img src="https://see.fontimg.com/api/renderfont4/8MOZ2/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UGxhbnQgQnVkZHkg/thefotosintesis-hollow.png" alt="Leaves fonts"></img></a>

            {/* Bootstrap Carousel - Looping over images */}
            <Carousel>
                <Carousel.Item interval={900}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={900}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=804"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={900}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            
            {/* <h2>Your go-to buddy to keep your plants nice and refreshed!</h2> */}
        </div>);
    }
}

// Export Home class to use in App.js
export default Home;