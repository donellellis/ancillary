import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Project.css'
import DeleteProject from './deleteProject/DeleteProject.js';

// defines environmental variables
const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/projects';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {projectData: []};
    }
    
    componentDidMount() {
        axios.get(backendBaseUrl + postEndpoint, {
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            }
        })
          .then((res) => {
            const projectData = res.data;
            console.log(projectData)
            this.setState({
                projectData
            })
          })
          .catch((err) => {
              console.log(err)
          })
    }

    componentDidUpdate() {
        axios.get(backendBaseUrl + postEndpoint, {
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            }
        })
          .then((res) => {
            const projectData = res.data;
            console.log(projectData)
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
            <div className='project' key={index}>
                <Link className="project-link" to={'/projects/'+ project._id}></Link>
                <img className="project-img" src={project.imageURL} alt=""/>
                <h2 className='project-h2'>{project.client}</h2>
                <h1 className='project-h1'>{project.name}</h1>
                <DeleteProject projectid={project._id}/>
           </div>
          )
      })
    return (
      <div className="project-container">
          {list}
      </div>
    )
  }
}

export default Project
