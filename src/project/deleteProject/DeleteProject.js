import React, { Component } from 'react'
import axios from 'axios';

import './DeleteProject.css'

// defines environmental variables
const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const deleteEndpoint = '/projects/deleteProject/';

class DeleteProject extends Component {

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
            window.location.reload();
        })
    }

    render () {
        return (
            <button onClick={this.handleDeleteRequest} className="far fa-minus-square"></button>
        )
    }

}

export default DeleteProject




