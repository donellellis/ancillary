import React, { Component } from 'react';
import './NewProject.css'
import axios from 'axios';

// defines environmental variables
const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/projects/';

class NewProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            client: '',
            imageURL: '',
            id: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClientChange = this.handleClientChange.bind(this);
        this.handleImageURLChange = this.handleImageURLChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleClientChange(event) {
        this.setState({client: event.target.value});
    }

    handleImageURLChange(event) {
        this.setState({imageURL: event.target.value})
    }

    handleSubmit(event) {
        // Sends a POST request
        axios({
            method: 'post',
            url: backendBaseUrl + postEndpoint,
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            },
            data: {
                name: this.state.name, 
                client: this.state.client, 
                imageURL: this.state.imageURL 
            }
        })
        .then((dataResult) => this.setState({id: dataResult.data._id}))
        // .then(this.props.toggleHidden());
        event.preventDefault();
        window.location.reload()
    }



  render() {
      
    return (
        <div className="newProject">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <h3 className="newProject-h3">New Project</h3>
                <input className="newProject-input" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="project name" />
                <input className="newProject-input" type="text" value={this.state.client} onChange={this.handleClientChange} placeholder="client name" />
                <input className="newProject-input" type="text" value={this.state.imageURL} onChange={this.handleImageURLChange} placeholder="project image" />
                <input className="home-button" type="submit" value="Create Project" />
            </form>
      </div>
    );
  }
}

export default NewProject;