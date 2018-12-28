import React, { Component } from 'react'

import './Dashboard.css'

class Dashboard extends Component {
  render () {
    return (
      <div>
          <h1>This is the Dashboard</h1>
          <h2>{this.props.email}</h2>
      </div>
    )
  }
}

export default Dashboard
