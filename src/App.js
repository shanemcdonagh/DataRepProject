// Importing application dependencies
import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Collection from './components/read/collection/readCollection';
import AddPlant from './components/create/add-plant';
import EditPlant from './components/update/edit-plant';

// Bootstrap - Used to provide CSS styling to Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReadMyPlants from './components/read/read-my-plants';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Used the website https://www.fontspace.com/category/plants for the writing for the header */}
          <a href="/"><img className="logo" src="https://see.fontimg.com/api/renderfont4/8MOZ2/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UGxhbnQgQnVkZHkg/thefotosintesis-hollow.png" alt="Home"></img></a>
          <p><i>Keeping your plants refreshed daily!</i></p>

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
            <Route path="/collection"><Collection /></Route>
            <Route path="/read-my-plants" ><ReadMyPlants /></Route>
            <Route path="/add-plant" ><AddPlant /></Route>
            <Route path={"/edit-plant/:id"} component={EditPlant}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
