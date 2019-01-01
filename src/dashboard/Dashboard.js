import React, { Component } from 'react'
import NewProject from '../project/newProject/NewProject.js'
import IndexProject from '../project/IndexProject.js'

import './Dashboard.css'

class Dashboard extends Component {
  
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden(event) {
    event.preventDefault()
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {
    return (
      <div className='dashboard'>
        <div className='dashboard-fixedContainer'>
          <div className='dashboard-textbox'>
              <div className="dashboard-nav">
                  <h1 className='dashboard-h1'>all projects</h1>
                  <button onClick={this.toggleHidden} className="far fa-plus-square"></button>
              </div>
              {!this.state.isHidden && <NewProject isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />}
          </div>
        </div>
        <div className="dashboard-projects">
          <IndexProject/>
        </div>
      </div>
    )
  }
}

export default Dashboard
