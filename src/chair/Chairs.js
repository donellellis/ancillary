import React, { Component } from 'react';
import axios from 'axios';

import './Chairs.css'


const backendBaseUrl = 'http://localhost:4000'
const postEndpoint = '/chairs';
const putEndpoint = '/chairs/updateProjectChairs';

class Chairs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chairSeedData: [],
            isUsed: [],
            projectData: []
        };

        this.handleIsUsedChange = this.handleIsUsedChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleIsUsedChange(event) {
        const value = event.target.checked;
        const name = event.target.name;
        let isUsed = this.state.isUsed
        
        if (value) {
            isUsed.push(name)
        } else {
            isUsed = isUsed.filter(id => id !== name)
        }
        
        this.setState({
            'isUsed': isUsed
        }, () => console.log(value, name, isUsed))
       
    }

    handleSubmit(event) {
        event.preventDefault();
        // if object in this.setState.isUsed is true, update in this project chairIDs
        console.log('is used', this.state.isUsed)
        // axios.put(backendBaseUrl + putEndpoint)
        //     .then(function (response) {
        //         // do something...
        //     }.bind(this))
        //     .catch(function (error) {
        //         console.log(error)
        //     });
        axios({
            method: 'put',
            url: backendBaseUrl + putEndpoint,
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            },
            data: {
                projectid: this.props.projectPath,
                isUsed: this.state.isUsed
            }
        })
        .then((res) => {
            const projectData = res.data;
            console.log(projectData)
            this.setState({
                projectData
            })
        // }) may need to add bind here
        .catch(function (error) {
            console.log(error)
        })
        })
    }

    
    componentDidMount() {
        axios.get(backendBaseUrl + postEndpoint)
          .then(res => {
            const chairSeedData = res.data;
            this.setState({ chairSeedData })
            console.log('chairSeedData', chairSeedData)
          })
          .catch((err) => {
              console.log(err)
          })
    }

    render() {
        let list = this.state.chairSeedData.map((chair, index) => {
            return(
                <div className="chairs" key={index}>
                    <img className="chairs-img" src={chair.imageURL} alt=""/>
                    <div className="chairs-inline">
                        <h1 className='chairs-h1'>{chair.chairName}</h1>
                        <h3 className='chairs-h3-bold'>${chair.list}</h3>
                    </div>
                    <div className="chairs-inline">
                        <h2 className='chairs-h2'>{chair.manufacturer}</h2>
                            <div className='chairs-checkbox'>
                                <input type='checkbox' name={chair._id} onChange={this.handleIsUsedChange} value={this.state.isUsed[chair]}/>

                            </div>
                    </div>
                </div>
            )
        })
        return(
            <form className="chairs-container" onSubmit={this.handleSubmit}>
                {list}
                <input className='chairs-button' type ="submit" value="Save to Project"/>
            </form>
        );
    }
}

export default Chairs;


// find project in database
// find list of chairIds in project
//if the chair exists in the project, show with a checkbox in Chairs







