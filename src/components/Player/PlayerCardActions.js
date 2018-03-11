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
        volume: 0.75
    }

    handlePlay() {
        this.setState({ playing: !this.state.playing })
    }
    handleChange(event){
        this.setState({ volume: event.target.value })
    }
    handleVolumeUp(){
        if (this.state.volume < 1) {
            this.setState({ volume: this.state.volume + 0.1 })
        } 
    }
    handleVolumeDown(){
        if (this.state.volume > 0) {
            this.setState({ volume: this.state.volume - 0.1 })
        }
    }

    render(){
        const { classes, moreInfo, handleExpand } = this.props;
        return (
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton color="primary" aria-label="Prev Stream">
                    <SkipPrevious />
                </IconButton>
                <IconButton color="primary" aria-label="Play/Pause" onClick={this.handlePlay.bind(this)} >
                    {this.state.playing ? <Pause /> : <PlayArrow />}
                </IconButton>
                <IconButton color="primary" aria-label="Next Stream">
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