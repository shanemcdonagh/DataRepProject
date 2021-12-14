// Imports(React, Component, Axios, and Bootstrap Elements)
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Class PlantsItem - Extends Component class
class PlantsItem extends Component {

    // Initialise current component
    constructor() {

        // Invoke the parent constructor
        super();

        // Binds the function call to 'this.DeletePlant', to be accessed as an event handler
        this.DeletePlant = this.DeletePlant.bind(this);

    }

    // Method - Removes plant based on its id
    DeletePlant() {

        //REF: https://www.w3schools.com/jsref/met_win_confirm.asp
        if (window.confirm("Are you sure you want to remove this plant?") === true) {
            // Logs id to console
            console.log("Delete: " + this.props.plant._id);

            // Call DELETE method on specific url
            axios.delete("http://localhost:4000/my-plants/" + this.props.plant._id)
                .then(() => {
                    // If successful, reload the page
                    this.props.reloadData();
                }) // Else...
                .catch(console.log("Could not remove plant from current collection"));
        }
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
                            <Image className='thumbnails' src={this.props.plant.image} thumbnail />
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
                            {/* Gives option to either edit the current plant or remove it from the collection (invoking method) */}
                            <Button className="plantButton" variant="success" href={"/edit-plant/" + this.props.plant._id}>Edit</Button>

                            {/* The use of arrow function here was used to solve an initial error that would call the function on render
                                Solution: https://stackoverflow.com/a/34226188; */}
                            <Button className="plantButton" variant="success" onClick={() => { this.DeletePlant() }}>Delete</Button>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </div>
        );
    }
}

// Export PlantsItem for use in readPlants.js
export default PlantsItem;