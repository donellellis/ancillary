// authentication code excerpts from https://git.generalassemb.ly/dc-wdi-react-redux/react-jwt-authentication/blob/master/README.md

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import axios from 'axios'

import Home from '../home/Home.js'
import NavBar from '../NavBar/NavBar'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import Furniture from '../furniture/Furniture.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)

  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }


  handleLogIn(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <NavBar isLoggedIn={this.state.isLoggedIn}/>
        <main>
          <Route exact path="/"
            render={(props) => {
              return (
                <Home isLoggedIn={this.state.isLoggedIn}/>
              )
            }}/>
          {/* <Route exact path="/furniture" component={ Furniture }/> */}
          <Route exact path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
          <Route exact path='/logout'
            render={(props) => {
              return (
                <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
              )
            }}
          />
          <Route exact path='/login'
            render={(props) => {
              return (
                <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
              )
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;