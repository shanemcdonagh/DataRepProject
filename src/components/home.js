// Imports (React, Component, Local Component, and Bootstrap Element)
import React, { Component } from 'react';
import ReadToWater from './read/to-water/readToWater';
import Carousel from 'react-bootstrap/Carousel';

// Class Home - Extends Component class
class Home extends Component {

    // Method - This contains the visual content of the component
    render() {
        return (<div>
            <div className="homeItems">
                <div className='slideshow'>
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
                {/* Creates a border between both divs through CSS (seen in App.css) */}
                <div className='borderLine'></div>
                {/* Displays the component of plants to water */}
                <div className='waterList'>
                    <ReadToWater></ReadToWater>
                </div>      
            </div>
        </div>);
    }
}

// Export Home class to use in App.js
export default Home;