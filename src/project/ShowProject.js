import React, { Component } from 'react'
import axios from 'axios';

import './ShowProject.css'

const backendBaseUrl = 'http://localhost:4000'
const postEndpoint = '/projects';

class ShowProject extends Component {

    constructor(props) {
        super(props);
        this.state = {projectData: []};
    }

    componentDidMount() {
        axios.get(backendBaseUrl + postEndpoint)
          .then((res) => {
            const projectData = res.data;
            this.setState({
                projectData
            })
          })
          .catch((err) => {
              console.log(err)
          })
    }


  render () {
      let list = this.state.projectData.map((project, index) => {
          return (
            <div className='showProject' key={index}>
                <img className="showProject-img" src={project.imageURL} alt="A Trip to the Moon"/>
                <h2 className='showProject-h2'>{project.client}</h2>
                <h1 className='showProject-h1'>{project.name}</h1>
          </div>
          )
      })
    return (
      <div className="showProject-container">
          {list}
      </div>
    )
  }
}

export default ShowProject