import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Chairs.css'


const backendBaseUrl = 'http://localhost:4000'
const postEndpoint = '/chairs';

class Chairs extends Component {
    constructor(props) {
        super(props);
        this.state = {chairData: []};
    }

    componentDidMount() {
        axios.get(backendBaseUrl + postEndpoint)
          .then(res => {
            const chairData = res.data;
            this.setState({ chairData })
          })
          .catch((err) => {
              console.log(err)
          })
    }

    render() {
        let list = this.state.chairData.map((chair, index) => {
            return(
                <div className="chairs" key={index}>
                    <img className="chairs-img" src={chair.imageURL} alt=""/>
                    <div className="chairs-inline">
                        <h1 className='chairs-h1'>{chair.chairName}</h1>
                        <h3 className='chairs-h3-bold'>${chair.list}</h3>
                    </div>
                    <div className="chairs-inline">
                        <h2 className='chairs-h2'>{chair.manufacturer}</h2>
                        <form>
                            <div className='chairs-checkbox'>
                                <input name='isUsed' type='checkbox' checked={this.state.isUsed} onChange={this.handleInputChange}/>
                                <label for="checkboxInput"></label>
                            </div>
                        </form>
                    </div>
                </div>
            )
        })
        return(
            <div className="chairs-container">
                {list}
            </div>
        );
    }
}

export default Chairs;
