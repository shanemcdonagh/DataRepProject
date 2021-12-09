import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styling/plants-item.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

        if (this.props.count == 0) {
            return (<div><h1>No plants have been added yet!</h1></div>)
        }
        else {
            return (
                <div>
                    {/* Props - Accesses data passed as a property to current component */}
                    <Container>
                        <hr />
                        <Row className="row">
                            <Col>
                                <Image src={this.props.plant.image} width="100px" rounded="true" />
                            </Col>
                            <Col>
                                <p>Name</p>
                                <h2>{this.props.plant.name}</h2>
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
                                <Button variant="success" href={"/edit-plant/"+this.props.plant._id}>Edit</Button>
                            </Col>
                            <Col>
                                <Button variant="success" onClick={() => { this.DeletePlant() }}>Delete</Button>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                    {/* Displays the edit component alongside the specific movie
                    <div>
                     <Link to="/add-plant" size='lg' className="btn btn-primary">Add</Link>
                     </div> */}
                </div>
            );
        }
    }
}

// Export Home class to use in App.js
export default MyPlantsItem;