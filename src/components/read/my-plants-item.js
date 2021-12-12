import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../../styling/plants-item.css"
import axios from 'axios';

// Class Home - Extends Component class
class MyPlantsItem extends Component {

    constructor() {
        // Invoke the parent constructor
        super();

        // Binds the function call to 'this.DeletePlant', to be accessed as an event handler
        this.DeletePlant = this.DeletePlant.bind(this);

    }

    // Function - Removes plant based on it's id
    DeletePlant() {
        console.log("Delete: " + this.props.plant._id);

        // Call delete method on specific url
        axios.delete("http://localhost:4000/my-plants/" + this.props.plant._id)
            .then(() => {
                // Reload the page
                this.props.reloadData();
            })
            .catch();
    }

    // Method - This contains the visual content of the component
    render() {
            return (
                <div>
                    {/* Props - Accesses data passed as a property to current component */}
                    <Container className='container'>
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
                                <p>Water On: </p>
                                <h3>{this.props.plant.waterOn}</h3>
                            </Col>
                            <Col>
                                <Button className="plantButton" variant="success" href={"/edit-plant/"+this.props.plant._id}>Edit</Button>
                                <Button className="plantButton" variant="success" onClick={() => { this.DeletePlant() }}>Delete</Button>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </div>
            );
        }
    }

// Export Home class to use in App.js
export default MyPlantsItem;