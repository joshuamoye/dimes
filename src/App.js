import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
import Careers from './careers';
import Nav from '.Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      
          
          <div id="intro">
              <center>
              <h3 id="mission">Our Mission</h3>
                  </center>
              <p>Our mission is ...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rutrum nisl, 
              a efficitur ante. Vestibulum ullamcorper convallis elit, id rutrum sem luctus at. 
              Morbi tortor urna, tincidunt id purus et, cursus tincidunt eros. Fusce non varius 
              tortor. Nullam eget posuere nisi, ac mattis turpis. Integer mollis ut odio sit amet 
              tempor. In rhoncus nibh ipsum, eget vehicula ex vehicula a. Aenean quis volutpat dui. 
              Phasellus tempus, tellus non elementum sollicitudin, ligula tortor tincidunt augue, 
              eget laoreet odio felis sed purus. Donec sed felis faucibus, ultrices dolor ut, ultrices 
              eros. Sed vitae semper elit.</p>
          </div>

          <Careers />

    );
  }
}

export default App;
