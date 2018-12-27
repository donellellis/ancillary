import React, { Component } from 'react'

import './SignUpForm.css'

class SignUpForm extends Component {
  render () {
    return (
      <div className="home">
        <div className="home-textbox">
          <h1 className="home-h1">ancillary</h1>
          <h2 className="home-h2">a furniture specification and budgeting tool for interior designers</h2>
          <h3 className="signUp-h3">Sign Up</h3>
          <form autocomplete="off">
            <div>
              <input className="signUp-input" type='text' name='email' placeholder="email" onChange={this.props.handleInput} />
            </div>
            <div>
              <input className="signUp-input" type='text' name='password' placeholder="password" onChange={this.props.handleInput} />
            </div>
            <input className="home-button" value='Submit' type='submit' onClick={this.props.handleSignUp} />
          </form>
        </div>
        <img className="home-img" src="https://i.imgur.com/nL4okEY.png" alt="Wishbone Chair by Carl Hansen"/>
      </div>
    )
  }
}

export default SignUpForm
