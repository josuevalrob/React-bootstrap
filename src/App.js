import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';

import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*Hi, I am the navbar*/}
          <Navbar />
        {/*print section*/}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />


        </div>
      </Router>
    );
  }
}

export default App;
