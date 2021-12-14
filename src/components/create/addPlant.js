// Import (React & Axios)
import React, { Component } from 'react';
import axios from 'axios';


// Class AddPlant - Extends Component sclass
class AddPlant extends Component {

    // Constructor - Used to initialise component
    constructor() {

        // Invoke parent constructor (Component)
        super();

         // Bind - Binds function calls to references
         this.submit = this.submit.bind(this);
         this.changeName = this.changeName.bind(this);
         this.changeType = this.changeType.bind(this);
         this.changeExposure = this.changeExposure.bind(this);
         this.changeImage = this.changeImage.bind(this);
         this.changeDay = this.changeDay.bind(this);

        // Initialise state to empty 
        this.state = {
            name: '',
            type: '',
            exposure: '',
            image: '',
            waterOn: 'Monday', // Default is Monday
        }
    }

    // Method - Invoked when form has been submitted
    submit(event) {

        // Alert onscreen of insert
        alert("Added plant to database: " + this.state.name);

        // Prevents a page refresh
        event.preventDefault();

        // Create new instance of a plant based on values set in form
        const newPlant = {
            name: this.state.name,
            type: this.state.type,
            exposure: this.state.exposure,
            image: this.state.image,
            waterOn: this.state.waterOn
        }

        // Send a POST request to the following path alongside the new plant
        // Log results to console
        axios.post("http://localhost:4000/my-plants", newPlant)
        .then((response)=>{
            console.log(response)
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    // Setter methods for new plant values
    changeName(event){
        this.setState({
            name: event.target.value
        })
    }
    changeType(event){
        this.setState({
            type: event.target.value
        })
    }
    changeExposure(event){
        this.setState({
            exposure: event.target.value
        })
    }
    changeImage(event){
        this.setState({
            image: event.target.value
        })
    }
    changeDay(event){
        this.setState({
            waterOn: event.target.value
        })
    }

    // Method - This contains the visual content of the component
    render() {
        return (
            <div className="App">
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Plant Name: </label>

                        {/* Input box */}
                        <input type="text"
                            className="form-control"
                            value={this.state.name} // Value of text box points to "name"
                            onChange={this.changeName} //Updates name value
                        />
                    </div>

                    {/* Type of Plant */}
                    <div className="form-group">
                        <label>Enter Plant Type: </label>

                        {/* Input box */}
                        <input type="text"
                            className="form-control"
                            value={this.state.type} // Value of text box points to "type"
                            onChange={this.changeType} //Updates type value
                        />
                    </div>

                    {/* Sun Exposure */}
                    <div className="form-group">
                        <label>Exposure: </label>

                        {/* Input box */}
                        <input type="text"
                            className="form-control"
                            value={this.state.exposure} // Value of text box points to "exposure"
                            onChange={this.changeExposure} //Updates exposure value
                        />
                    </div>
                     {/* Image */}
                     <div className="form-group">
                        <label>Image: </label>

                        {/* Input box */}
                        <input type="text"
                            className="form-control"
                            value={this.state.image} // Value of text box points to "image"
                            onChange={this.changeImage} //Updates image value
                        />
                    </div>
                    {/* Water On */}
                    <div className="form-group">
                        <label>Water On: </label><br/>

                        {/* Gives option to choose between days of the week */}
                        <select name="water" id="water" onChange={this.changeDay} value={this.state.waterOn}>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>
                    <div>
                        <br></br>
                        {/* Button to add the plant to the user collection */}
                        <input type="submit" value="Add Plant" className="btn btn-success"></input>
                    </div>
                </form>
            </div>);
    }
}

// Export AddPlant class for use in App.js
export default AddPlant;