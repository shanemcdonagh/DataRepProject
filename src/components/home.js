import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReadWaterPlants from './read/read-water';
import '../styling/home.css';

// Class Home - Extends Component class
class Home extends Component {

    // Method - This contains the visual content of the component
    render() {
        return (<div>
            <div className="homeItems">
                <div>
                    {/* Bootstrap Carousel - Looping over images */}
                    <Carousel>
                        <Carousel.Item interval={1600}>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='borderLine'></div>
                <div className='waterList'>
                    <ReadWaterPlants></ReadWaterPlants>
                </div>      
            </div>
        </div>);
    }
}

// Export Home class to use in App.js
export default Home;