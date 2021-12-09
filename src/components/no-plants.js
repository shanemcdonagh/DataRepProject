import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

// Class Home - Extends Component class
class Test extends Component {

    render() {
       return(
       <div className='errorDiv'>
        <h1>No plants have been added!</h1>
        <Button variant="success" href="/add-plant">Add a Plant</Button>
       </div>)
    }
}

// Export Home class to use in App.js
export default Test;