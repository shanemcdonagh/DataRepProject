import axios from 'axios';
import React, { Component } from 'react';
import '../../styling/addplant.css'

// Class Home - Extends Component class
class EditPlant extends Component {

    // Initialises state initially to empty
    constructor() {

        // Invoke parent constructor (Component)
        super();

         // Bind - When invoked, call local instances
         this.submit = this.submit.bind(this);
         this.changeName = this.changeName.bind(this);
         this.changeType = this.changeType.bind(this);
         this.changeExposure = this.changeExposure.bind(this);
         this.changeImage = this.changeImage.bind(this);
         this.changeDay = this.changeDay.bind(this);

        // Initialise state to empty 
        this.state = {
            _id: '',
            name: '',
            type: '',
            exposure: '',
            image: '',
            waterOn: 'Monday', // Default is Monday
        }
    }

    // Called when component is loaded
    componentDidMount(){

        axios.get('http://localhost:4000/my-plants/' + this.props.match.params.id)
        .then((response)=> {
            
            // Update values of the current state from the retrieved document values
            this.setState({
                _id:response.data._id,
                name:response.data.name,
                type:response.data.type,
                exposure:response.data.exposure,
                image:response.data.image,
                waterOn:response.data.waterOn
            })
        })
        .catch((error)=>{console.log(error);})
    }

    // Method - Invoked when form has been submitted
    submit(event) {

        // Alert onscreen of insert (test)
        alert("Updated plant, passing to database " + this.state.name);

        // Prevent page refresh
        event.preventDefault();

        // Create new instance of a plant based on values set in form
        const updatedPlant = {
            _id: this.state._id,
            name: this.state.name,
            type: this.state.type,
            exposure: this.state.exposure,
            image: this.state.image,
            waterOn: this.state.waterOn
        }

        // Send a POST request to the following path alongside new plant
        axios.put("http://localhost:4000/my-plants/"+this.state._id, updatedPlant)
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
                            value={this.state.name}
                            onChange={this.changeName} //Update name value
                        />
                    </div>

                    {/* Type of Plant */}
                    <div className="form-group">
                        <label>Enter Plant Type: </label>

                        {/* Input box */}
                        <input type="text"
                            className="form-control"
                            value={this.state.type} // Value of text box points to "Type"
                            onChange={this.changeType} //Update type value
                        />
                    </div>

                    {/* Sun Exposure */}
                    <div className="form-group">
                        <label>Exposure: </label>

                        {/* Input box */}
                        <input type="text"
                            className="form-control"
                            value={this.state.exposure} // Value of text box points to "Exposure"
                            onChange={this.changeExposure} //Update exposure value
                        />
                    </div>
                     {/* Image */}
                     <div className="form-group">
                        <label>Image: </label>

                        {/* Input box */}
                        <input type="text"
                            className="form-control"
                            value={this.state.image} // Value of text box points to "Image"
                            onChange={this.changeImage} //Update image value
                        />
                    </div>
                    <div className="form-group">
                        <label>Water On: </label><br/>

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
                        {/* Button to submit movie */}
                        <input type="submit" value="Update" className="btn btn-success"></input>
                    </div>
                </form>
            </div>);
    }
}

// Export Home class to use in App.js
export default EditPlant;