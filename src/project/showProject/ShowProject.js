import React, { Component } from 'react';
import './ShowProject.css'
import axios from 'axios';

const backendBaseUrl = 'http://localhost:4000'
const postEndpoint = '/projects/singleProject';

class ShowProject extends Component {

    constructor(props) {
        super(props);
        this.state = {projectData: {
            name: "",
            client: "",
            imageURL: "",
            chairIds: []
        }};
    }

    componentDidMount(){
        axios({
            method: 'post',
            url: backendBaseUrl + postEndpoint,
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            },
            data: {
              projectid: this.props.match.params.id
            }
          })
          .then((res) => {
              const projectData = res.data;
              console.log(projectData)
              this.setState({
                  projectData
              })
          })
          .catch(function (error) {
            console.log(error);
          });
    }


  render() {

    let project = this.state.projectData

    return (
        <div className="showProjects">
            <h1>{this.props.match.params.id}</h1>
            <h2>{project.name}</h2>
            <h2>{project.client}</h2>
        </div>
    );
  }
}

export default ShowProject;