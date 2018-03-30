import axios from 'axios';
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';

class Stop extends Component {
    state = { 
        playing: true
    }

    handlePlay() {
        axios.post('/api/stop', {player: this.state.playing})
            .then(res => {
                if (res.data === true){
                    this.setState({ playing: !this.state.playing })
                }
            }).catch( err => console.log(err));
    }

    render(){
        return (
            <IconButton color="primary" aria-label="Play/Pause" onClick={this.handlePlay.bind(this)} >
                {this.state.playing ? <Pause /> : <PlayArrow />}
            </IconButton>
        );
    } 
}

export default Stop;