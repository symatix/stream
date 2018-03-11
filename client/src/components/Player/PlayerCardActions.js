import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import SkipPrevious from 'material-ui-icons/SkipPrevious';
import SkipNext from 'material-ui-icons/SkipNext';
import VolumeUp from 'material-ui-icons/VolumeUp';
import VolumeDown from 'material-ui-icons/VolumeDown';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import './PlayerCardActionSlider.css'

const styles = theme => ({
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class PlayerCardActions extends Component {
    state = { 
        playing: true,
        volume: this.props.volume
    }

    handlePlay() {
        axios.post('/api/stop', {player: this.state.playing})
            .then(res => {
                if (res.data === true){
                    this.setState({ playing: !this.state.playing })
                }
            }).catch( err => console.log(err));
    }
    handleStreamChange(action){
        axios.post('/api/change-stream', {id: this.props.streamId, action })
            .then(res => {
                this.props.playStream(res.data.id);
            }).catch( err => console.log(err));
    }
    handleChange(event){
        
        const volume = Math.round(event.target.value * 100) / 100;
            this.apiVolumeChange(volume);
    }
    handleVolumeUp(){
        let volume = this.state.volume + 0.1;
        volume = volume < 1 ? volume : 1;

        this.apiVolumeChange(volume);
    }
    handleVolumeDown(){
        let volume = this.state.volume - 0.1;
        volume = volume < 0 ? 0 : volume;
        this.apiVolumeChange(volume);
    }
    apiVolumeChange(volume){
        axios.post('/api/volume', { volume })
            .then(res => this.setState({ volume: res.data.volume })) // take this out if response too long
            .catch(err => console.log(err));
    }

    render(){
        
        const { classes, moreInfo, handleExpand } = this.props;
        return (
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton color="primary" aria-label="Prev Stream" onClick={() => this.handleStreamChange("prev")}>
                    <SkipPrevious />
                </IconButton>
                <IconButton color="primary" aria-label="Play/Pause" onClick={this.handlePlay.bind(this)} >
                    {this.state.playing ? <Pause /> : <PlayArrow />}
                </IconButton>
                <IconButton color="primary" aria-label="Next Stream" onClick={() => this.handleStreamChange("next")}>
                    <SkipNext />
                </IconButton>
                <IconButton color="primary" aria-label="Volume Down"  onClick={this.handleVolumeDown.bind(this)}>
                <VolumeDown />
                </IconButton>

                <input
                    type='range'
                    min={0}
                    max={1}
                    step='any'
                    value={this.state.volume}
                    onChange={this.handleChange.bind(this)} />

                    <IconButton color="primary" aria-label="Volume Up"  onClick={this.handleVolumeUp.bind(this)}>
                    <VolumeUp />
                    </IconButton>
                
                <IconButton
                    color="primary"
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: moreInfo,
                    })}
                    onClick={handleExpand}
                    aria-expanded={moreInfo}
                    aria-label="Show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        );
    } 
}

PlayerCardActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(PlayerCardActions));