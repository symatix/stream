import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import Alert from '../Alert/Alert';
import style from './style';
import { playStream, stopStream, playerState } from '../../actions';

import PlaySvg from '../../svg/play.svg';
import StopSvg from '../../svg/pause.svg';

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
            this.props.playerState(!this.state.playing);
            axios.post('/api/stop', { player: this.state.playing })
                .then(res => this.setState({playing: !this.state.playing}))
                .catch(e => console.log(e));
        }
    }

    render(){
        return (
            <IconButton style={style.iconHolder} color="primary" aria-label="Play/Pause" onClick={this.handlePlay.bind(this)} >
                {this.props.player 
                    ? <img src={StopSvg} alt="stop" style={style.icon}/> 
                    : <img src={PlaySvg} alt="play" style={style.icon}/>}
                <Alert message={'Please select a stream first'} open={this.state.alert}/>
            </IconButton>
        );
    } 
}

function mapStateToProps({player}){
    return { player }
}

function mapDispatchToProps(dispatch){
    return { 
        playStream: bindActionCreators(playStream, dispatch),
        playerState: bindActionCreators(playerState, dispatch),
        stopStream: bindActionCreators(stopStream, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stop);