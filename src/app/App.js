import React, { Component } from 'react';
import './App.css';
import {
  Link,
  Route
} from 'react-router-dom'

import Home from '../home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <main>
          <Route exact path="/" component={ Home }/>
        </main>
      </div>
    );
  }
}

export default App;