import React, { Component } from 'react';
import './ShowProject.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

import ShowChairsProject from '../../chair/showChairsProject/ShowChairsProject.js'

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
        <div className='showProjects'>
                <div className='showProjects-fixedContainer'>
                    <div className='showProjects-textbox'>
                        <div className="showProjects-nav">
                            {/* <button onClick={this.toggleHidden} className="far fa-plus-square"></button> */}

                            {/* navigates back to dashboard */}
                            <Link className="fas fa-arrow-left showProjects-navButton" to={'/projects'}></Link>

                            {/* shows all chairs in project */}
                            <button class="fas fa-chair showProjects-navButton"></button>

                            {/* shows all available chairs in database */}
                            <button class="fas fa-th showProjects-navButton"></button>
                            {/* {!this.state.isHidden && <Chair isHidden={this.state.isHidden} toggleHidden={this.toggleHidden} />} */}
                        </div>
                        <h2 className='showProjects-h2'>{project.client}</h2>
                        <h1 className='showProjects-h1'>{project.name}</h1>
                    </div>
                </div>
                <div className="showProjects-projects">
                <ShowChairsProject projectPath={this.props.match.params.id}/>
                </div>
        </div>
    );
  }
}

export default ShowProject;