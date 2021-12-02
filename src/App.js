// Importing application dependencies
import React, { Component } from 'react';
import './App.css';
import Home from './components/home'

// Bootstrap - Used to provide CSS styling to Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";    

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
              <Container>
                <Button variant="outline-success" href="/">Home</Button>
                <Button variant="outline-success" href="/plants">Plants</Button>
                <Button variant="outline-success" href="/my-plants">My Plants</Button>
              </Container>
            </Navbar>
          </Container>
          <Home></Home>

          {/* When a call is made to a specific path, the corresponding component will be swapped in */}
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/plants" ><Plants /></Route>
            <Route path="/my-plants" ><myPlants /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
