import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Alert from '../Alert/Alert';
import style from './style';
import { playStream, stopStream } from '../../actions';

class Stop extends Component {
    state = { 
        playing: this.props.active,
        alert: false
    }

    componentWillReceiveProps(nextProps){
        this.setState({ playing: nextProps.active });
    }

    handlePlay() {
        // if player is playing, send a stop command
        if (!this.props.active && !this.state.playing){
            this.setState({alert: true});
            setTimeout(() => {
                this.setState({alert: false})
            }, 2000)
        } else {
            axios.post('/api/stop', { player: this.state.playing })
                .then(res => this.setState({playing: !this.state.playing}))
                .catch(e => console.log(e));
        }
    }

    render(){
        return (
            <IconButton style={style.iconHolder} color="primary" aria-label="Play/Pause" onClick={this.handlePlay.bind(this)} >
                {this.state.playing ? <Pause  style={style.icon}/> : <PlayArrow  style={style.icon}/>}
                <Alert message={'Please select a stream first'} open={this.state.alert}/>
            </IconButton>
        );
    } 
}

function mapDispatchToProps(dispatch){
    return { 
        playStream: bindActionCreators(playStream, dispatch),
        stopStream: bindActionCreators(stopStream, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Stop);