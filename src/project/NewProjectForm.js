import React, { Component } from 'react';
import './NewProjectForm.css'
import axios from 'axios';
// import { Redirect } from 'react-router'

const backendBaseUrl = 'http://localhost:4000'
const postEndpoint = '/projects';

class NewProjectForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            client: '',
            imageURL: '',
            id: '',
            redirect: false
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
            data: {
                name: this.state.name, 
                client: this.state.client, 
                imageURL: this.state.imageURL 
            }
        })
        .then((dataResult) => this.setState({id: dataResult.data._id}))
        .then(this.props.toggleHidden());
        // .then(() => this.setState({redirect: true}));
        event.preventDefault();
    }


  render() {
      
    //   if (this.state.redirect === true) {
    //     return <Redirect to={'/order/' + this.state.id} />
    //   }

    return (
        <div className="newProject">
            <form autocomplete="off" onSubmit={this.handleSubmit}>
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

export default NewProjectForm;