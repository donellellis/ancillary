import React, { Component } from 'react';
import './App.css';
import {
  Link,
  Route
} from 'react-router-dom'

import Home from '../home/Home.js'
import Furniture from '../furniture/Furniture.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <main>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/furniture" component={ Furniture }/>
        </main>
      </div>
    );
  }
}

export default App;