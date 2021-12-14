// Importing application dependencies
import React, { Component } from 'react';
import './App.css';

// Local Components
import Home from './components/home'
import ReadCollection from './components/read/collection/readCollection';
import AddPlant from './components/create/addPlant';
import EditPlant from './components/update/editPlant';
import ReadPlants from './components/read/plants/readPlants';

// Bootstrap - Used to provide CSS styling to Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// React-Router-Dom - Allows or dynamic routing
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Class App - extends Component Class
class App extends Component {

  // Method - Visual content of the application
  render() {
    return (
      <Router>
        <div className="App">
          {/* Used the website https://www.fontspace.com/category/plants for the writing for the header */}
          <a href="/"><img className="logo" src="https://see.fontimg.com/api/renderfont4/8MOZ2/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UGxhbnQgQnVkZHkg/thefotosintesis-hollow.png" alt="Home"></img></a>
          <p><i>Keeping your plants refreshed daily!</i></p>
    
          {/* NavBar - For easy navigation throughout the application */}
          <Navbar expand="lg" variant="light" bg="success">
            <Container className="buttons">
              <Button variant="light" href="/">Home</Button>
              <Button variant="light" href="/collection">Collection</Button>
              <Button variant="light" href="/read-my-plants">My Plants</Button>
              <Button variant="light" href="/add-plant">Add</Button>
            </Container>
          </Navbar>

          {/* Switches between the local components */}
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/collection"><ReadCollection /></Route>
            <Route path="/read-my-plants" ><ReadPlants /></Route>
            <Route path="/add-plant" ><AddPlant /></Route>
            <Route path={"/edit-plant/:id"} component={EditPlant}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// Export App component for use in index.js
export default App;
