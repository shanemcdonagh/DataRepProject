// Imports (React, Component, Axios and Bootstrap Elements)
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


// Class CollectionItem - Extends Component class
class CollectionItem extends Component {

    // Initialises component 
    constructor() {

        // Invokes parent class constructor
        super();

        // Binds - Used to bind function calls to specific references
        this.changeDay = this.changeDay.bind(this);
        this.AddMyPlant = this.AddMyPlant.bind(this);

        // Sets default value to 'Monday'
        this.state = {
            waterOn: 'Monday',
        }
    }

    // Method - Used to send values of selected document to be added to a new collection
    AddMyPlant(plant) {

        // Initialises new instance of a plant to the parameter values
        const myPlant =
        {
            name: plant.name,
            type: plant.type,
            exposure: plant.exposure,
            image: plant.image,

            // Additional field to be added based on user selection
            waterOn: this.state.waterOn
        }

        // Sends a POST request to the following path alongside the new plant
        // Log responses to the console
        axios.post("http://localhost:4000/my-plants", myPlant)
            .then((response) => {
                // On-screen alert to confirm successfull addition 
                alert("Plant added to collection!");
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Setter method used to set state of 'waterOn'
    changeDay(event) {
        this.setState({
            waterOn: event.target.value
        })
    }

    // Method - This contains the visual content of the component
    render() {
        return (
            <div>
                {/* Props - Accesses data passed as a property to current component */}
                <Container className='contains'>
                    <hr />
                    <Row className="row">
                        <Col>
                            <Image className='thumbnails' src={this.props.plant.image} thumbnail/>
                        </Col>
                        <Col>
                            <p>Name</p>
                            <h3>{this.props.plant.name}</h3>
                        </Col>
                        <Col>
                            <p>Type</p>
                            <h3>{this.props.plant.type}</h3>
                        </Col>
                        <Col>
                            <p>Exposure</p>
                            <h3>{this.props.plant.exposure}</h3>
                        </Col>
                        <Col>
                            <p>Day to Water</p>
                            <select name="water" id="water" onChange={this.changeDay}>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </Col>
                        <Col>
                            {/* Invokes method to add selected plant to another collection */}
                            {/* Problem: Initially the function "AddMyPlant" was invoked on render
                                Solution: https://stackoverflow.com/a/34226188 */}
                            <Button variant="success" onClick={() => { this.AddMyPlant(this.props.plant) }}>Add</Button>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </div>);
    }
}

// Export CollectionItem for use in collection.js
export default CollectionItem;