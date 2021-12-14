// Import (React and Component)
import React, { Component } from 'react';

// Class NoneToWater - Extends Component class
class NoneToWater extends Component {

    // Method - Visual content of class
    render() {
        return (
            <div className='noneToWater'>
                <h3>No plants to water today</h3>
            </div>)
    }
}

// Export NoneToWater class to use in toWater.js
export default NoneToWater;