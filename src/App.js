// Importing application dependencies
import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import ReadPlants from './components/read-plants';
import MyPlants from './components/my-plants'
import AddPlant from './components/add-plant';

// Bootstrap - Used to provide CSS styling to Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";    
import ReadMyPlants from './components/read-my-plants';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Used the website https://www.fontspace.com/category/plants for the writing for the header */}
          <a href="/"><img src="https://see.fontimg.com/api/renderfont4/8MOZ2/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UGxhbnQgQnVkZHkg/thefotosintesis-hollow.png" alt="Home"></img></a>

          <Container>
            <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
              <Container>
                <Button variant="outline-success" href="/">Home</Button>
                <Button variant="outline-success" href="/read-plants">Plants</Button>
                <Button variant="outline-success" href="/read-my-plants">My Plants</Button>
                <Button variant="outline-success" href="/add-plant">Add Plant</Button>
              </Container>
            </Navbar>
          </Container>
           {/* Switches between the local components */}
           <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/read-plants"><ReadPlants /></Route>
            <Route path="/read-my-plants" ><ReadMyPlants /></Route>
            <Route path="/add-plant" ><AddPlant /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
