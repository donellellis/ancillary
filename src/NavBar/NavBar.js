import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
  render () {
    let navBarItems = []
    if (this.props.isLoggedIn) {
      navBarItems.push(<Link className="nav-item" key={1} to='/logout'>Log Out</Link>)
    } else {
      navBarItems.push(<Link className="nav-item" key={2} to='/signup'>Sign Up</Link>)
      navBarItems.push(<Link className="nav-item" key={3} to='/login'>Log In</Link>)
    }
    return (
      <div className='nav'>
        <div>
          <Link className="nav-logo" to='/'>ancillary</Link>
        </div>
        <div className="nav-bar">
          {navBarItems}
        </div> 
      </div>
    )
  }
}

export default NavBar
