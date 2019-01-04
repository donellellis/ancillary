import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './LogOut.css'

class LogOut extends Component {
  render () {

    if (!this.props.isLoggedIn){
      return <Redirect to={'/'}/>;
    }

    return (
      <div className="home">
        <div className="home-textbox">
          <h1 className="home-h1">ancillary</h1>
          <h2 className="home-h2">a furniture specification and budgeting tool for interior designers</h2>
          <h3 className="logOut-h3">Log Out</h3>
          <form>
            <input className="home-button" value='Log Out' type='submit' onClick={this.props.handleLogOut} />
          </form>
        </div>
        <img className="home-img" src="https://i.imgur.com/nL4okEY.png" alt="Wishbone Chair by Carl Hansen"/>
      </div>
    )
  }
}

export default LogOut
