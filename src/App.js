// Importing application dependencies
import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Plants from './components/plants'
import myPlants from './components/my-plants'

// Bootstrap - Used to provide CSS styling to Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";    

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

          {/* When a call is made to a specific path, the corresponding component will be swapped in */}
           {/* Had problem with Switch here, due to differing versions of React Router, solved with: https://reactrouter.com/docs/en/v6/upgrading/v5 */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/plants" element={<Plants />}/>
            <Route path="/my-plants" element={<myPlants />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
