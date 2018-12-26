import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-textbox">
          <h1 className="home-h1">ancillary</h1>
          <h2 className="home-h2">a furniture specification and budgeting tool for interior designers</h2>
          <div className="home-links">
            <button className="home-button" href="#">Sign Up</button>
            <button className="home-button" href="#">Log In</button>
          </div>
        </div>
        <img className="home-img" src="https://i.imgur.com/nL4okEY.png" alt="Wishbone Chair by Carl Hansen"/>
      </div>
    );
  }
}

export default Home;

