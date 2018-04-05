import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import IconButton from 'material-ui/IconButton';
import VolumeUp from 'material-ui-icons/VolumeUp';
import VolumeDown from 'material-ui-icons/VolumeDown';
import './VolumeSlider.css'


class Volume extends Component {
    state = { 
        volume: this.props.volume
    }

    handleChange(event){
        const volume = Math.round(event.target.value);
        this.apiVolumeChange(volume);
    }

    handleVolumeUp(){
        let volume = this.state.volume + 5;
        volume = volume < 96 ? volume : 96;
        this.apiVolumeChange(volume);
    }

    handleVolumeDown(){
        let volume = this.state.volume - 5;
        volume = volume < 50 ? 50 : volume;
        this.apiVolumeChange(volume);
    }

    apiVolumeChange(volume){
        this.setState({ volume });
        console.log(volume);

        axios.post('/api/volume', { volume })
            .catch(err => console.log(err));
    }

    render(){
        console.log("VOLUME STATE: ", this.state.volume);
        return (
            <div>
                <IconButton color="primary" aria-label="Volume Down"  onClick={this.handleVolumeDown.bind(this)}>
                    <VolumeDown />
                </IconButton>
                <MediaQuery query="(min-device-width: 1224px)">
                    <input
                        type='range'
                        min={50}
                        max={96}
                        step='any'
                        value={this.state.volume}
                        onChange={this.handleChange.bind(this)} />
                </MediaQuery>
                <IconButton color="primary" aria-label="Volume Up"  onClick={this.handleVolumeUp.bind(this)}>
                    <VolumeUp />
                </IconButton>
            </div>
        );
    } 
}


function mapStateToProps({volume}){
    return { volume }
}

export default connect(mapStateToProps)(Volume);