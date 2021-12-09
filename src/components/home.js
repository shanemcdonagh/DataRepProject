import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styling/home.css';

// Class Home - Extends Component class
class Home extends Component {

    // Method - This contains the visual content of the component
    render() {

        // Retrieves the day of the week and converts to a String
        var date = new Date();
        var weekday = date.toLocaleString("default", { weekday: "long" })

        return (<div>
            <div className="contain">
                <div>
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
                </div>
                <div>
                    <h2>It is {weekday}, time to water:</h2>
                    {/* <ReadWaterPlants></ReadWaterPlants> */}
                </div>      
            </div>
        </div>);
    }
}

// Export Home class to use in App.js
export default Home;