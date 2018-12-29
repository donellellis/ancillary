import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Furniture extends Component {
    constructor(props) {
        super(props);
        this.state = {furnitureData: []};
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/furniture`)
          .then(res => {
            const furnitureData = res.data;
            this.setState({ furnitureData })
          })
          .catch((err) => {
              console.log(err)
          })
    }

    render() {
        let list = this.state.furnitureData.map((furniture, index) => {
            return(
                <div className="name" key={index}>
                    <h2>
                        {furniture.modelName}
                    </h2>
                    <h3>
                        {furniture.manufacturer}
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

export default Furniture;