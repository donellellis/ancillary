import React, { Component } from 'react'
import Project from '../project/Project.js'

import './Dashboard.css'

class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard'>
        <div className='dashboard-textbox'>
            <h1 className='dashboard-h1'>all projects</h1>
            <i class="far fa-plus-square"></i>
        </div>
        <div className="dashboard-projects">
            {/* <Project/> */}
        </div>
      </div>
    )
  }
}

export default Dashboard
