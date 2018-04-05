import React, { Component } from 'react';
import axios from 'axios';
import conf from '../../config';

class MetaImg extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            img: null
        }
    }

    componentDidMount(){
        axios
            .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.artist}&api_key=${conf.lastFM_API}&format=json`)
            .then(res => this.setState({ img: res.data.artist.image[0]['#text'] }))
            .catch(e => console.log(e))
    }

    render () {
        return (
            <div>
                <img src={this.state.img} alt="" />
            </div>
        )
    }
}
  
export default MetaImg;
