import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Chair extends Component {
    constructor(props) {
        super(props);
        this.state = {chairData: []};
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/chair`)
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
                <div className="name" key={index}>
                    <h2>
                        {chair.modelName}
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

export default Chair;