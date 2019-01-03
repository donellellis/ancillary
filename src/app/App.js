// authentication code excerpts from https://git.generalassemb.ly/dc-wdi-react-redux/react-jwt-authentication/blob/master/README.md

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import axios from 'axios'

import Home from '../home/Home.js'
import NavBar from '../navBar/NavBar'
import SignUpForm from '../signUpForm/SignUpForm'
import LogInForm from '../logInForm/LogInForm'
import LogOut from '../logOut/LogOut'
import Dashboard from '../dashboard/Dashboard.js'
import ShowProject from '../project/showProject/ShowProject.js'
import Chairs from '../chair/Chairs.js'

// defines environmental variables
const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION

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
    axios.post( backendBaseUrl + '/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
      // window.location.assign('/projects')
    })
    .catch(err => console.log(err))
  }


  handleLogIn(e) {
    e.preventDefault()
    axios.post(backendBaseUrl + '/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
      // window.location.assign('/projects')
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
          <Route exact path='/projects' component={ Dashboard } />
          <Route exact path='/projects/:id' component={ ShowProject }/>
          <Route exact path='/chairs' component={ Chairs}/>
        </main>
        <footer></footer>
      </div>
    );
  }
}


export default App;