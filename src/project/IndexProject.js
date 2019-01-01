import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import './IndexProject.css'

const backendBaseUrl = 'http://localhost:4000'
const postEndpoint = '/projects';

class IndexProject extends Component {

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

  render () {
      let list = this.state.projectData.map((project, index) => {
          return (
            <div className='indexProject' key={index}>
                <Link className="indexProject-link" to={'/projects/'+ project._id}></Link>
                <img className="indexProject-img" src={project.imageURL} alt=""/>
                <h2 className='indexProject-h2'>{project.client}</h2>
                <h1 className='indexProject-h1'>{project.name}</h1>
            </div>
          )
      })
    return (
      <div className="indexProject-container">
          {list}
      </div>
    )
  }
}

export default IndexProject
