import React, { Component } from 'react'
import axios from 'axios';

import './DeleteProject.css'


const backendBaseUrl = 'http://localhost:4000'
const deleteEndpoint = '/projects/deleteProject';

class DeleteProject extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

        this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
    }

    // deletes project from database
    handleDeleteRequest = event => {
        event.preventDefault();

        console.log(this.props.projectid)
        axios.delete(backendBaseUrl + deleteEndpoint, {
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            },
            data: {
                projectid: this.props.projectid
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render () {
        return (
            <button onClick={this.handleDeleteRequest} className="far fa-minus-square"></button>
        )
    }

}

export default DeleteProject




