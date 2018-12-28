import React, { Component } from 'react'

import './Project.css'

class Project extends Component {
  render () {
    return (
      <div className='project'>
        <img className="project-img" src="https://i.imgur.com/nUA7NRz.jpg?1" alt="A Trip to the Moon"/>
        <h2 className='project-h2'>client name</h2>
        <h1 className='project-h1'>project name</h1>
      </div>
    )
  }
}

export default Project