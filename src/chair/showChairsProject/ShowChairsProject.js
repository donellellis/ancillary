import React, { Component } from 'react'
import axios from 'axios';

import './ShowChairsProject.css'

const backendBaseUrl = 'http://localhost:4000'
const postEndpoint = '/chairs/projectChairs';

class ShowChairsProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chairData: []
        }
    }

    
    componentDidMount(){
        axios({
            method: 'post',
            url: backendBaseUrl + postEndpoint,
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            },
            data: {
              projectid: this.props.projectPath
            }
          })
          .then((res) => {
              const chairData = res.data;
              console.log(chairData)
              this.setState({
                  chairData
              })
          })
          .catch(function (error) {
            console.log(error);
          });
    }


  render () {

      let list = this.state.chairData.map((chair, index) => {
          return (
            <div className='showChairsProject' key={index}>
                <img className="showChairsProject-img" src={chair.imageURL} alt=""/>
                <h1 className='showChairsProject-h1'>{chair.chairName}</h1>
                <h2 className='showChairsProject-h2'>{chair.manufacturer}</h2>
                <h3 className='showChairsProject-h3'>{chair.chairNumber}</h3>
                <h3 className='showChairsProject-h3'>{chair.dimensions}</h3>
                <h3 className='showChairsProject-h3-bold'>${chair.list}</h3>
            </div>
          )
      })
    return (
      <div className="showChairsProject-container">
          {list}
      </div>
    )
  }
}



export default ShowChairsProject
