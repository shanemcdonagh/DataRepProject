import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


// Class Home - Extends Component class
class CollectionItem extends Component {

    constructor() {

        super();

        this.changeDay = this.changeDay.bind(this);
        this.AddMyPlant = this.AddMyPlant.bind(this);

        this.state = {
            waterOn: 'Monday',
        }
    }

    AddMyPlant(plant) {

        alert("Plant added to collection!")
        const myPlant =
        {
            name: plant.name,
            type: plant.type,
            exposure: plant.exposure,
            image: plant.image,
            waterOn: this.state.waterOn
        }

        // Send a POST request to the following path alongside new plant
        axios.post("http://localhost:4000/my-plants", myPlant)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                            <Button variant="success" onClick={() => { this.AddMyPlant(this.props.plant) }}>Add</Button>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </div>);
    }
}

// Export Home class to use in App.js
export default CollectionItem;