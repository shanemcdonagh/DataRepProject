// Imports (React, Component, and Bootstrap elements)
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Class WaterItem - Extends Component class
class WaterItem extends Component {

    // Method - This contains the visual content of the component
    render() {
        return (
            <div className="plantsToWater">
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
                    </Row>
                    <hr />
                </Container>
            </div>
        );
    }
}

// Export WaterItem class to use in toWater.js
export default WaterItem;