import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
                    <h2>
                        {chair.chairName}
                    </h2>
                    <h3>
                        {chair.manufacturer}
                    </h3>
                </div>
            )
        })
        return(
            <div>
                {list}
            </div>
        );
    }
}

export default Chairs;