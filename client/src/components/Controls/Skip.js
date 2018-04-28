import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import { playStream, setView, playerState } from '../../actions';
import style from './style';

import PreviousSvg from '../../svg/ctrl_previous.svg';
import NextSvg from '../../svg/ctrl_skip.svg';
  

class Skip extends Component {

    handleStreamChange(action){
        const { streams, streamView } = this.props;
        let index;
        if (action === 'prev'){
            index = streamView - 1 >= 0 
                ? streamView - 1 
                : streams.length - 1;
        }
        if (action === 'next'){
            index = streamView + 1 === streams.length 
                ? 0 
                : streamView + 1;
        }
        this.props.playStream(streams[index].id)
        this.props.setView(index);
        this.props.playerState(true)
    }

    render(){
        return (
            <div style={{display:'inline-block'}}>

                <IconButton 
                    color="primary" 
                    aria-label="Prev Stream" 
                    onClick={() => this.handleStreamChange("prev")}>
                    <img style={style.icon} src={PreviousSvg} alt="previous" />
                </IconButton>

                <IconButton 
                    color="primary" 
                    aria-label="Next Stream" 
                    onClick={() => this.handleStreamChange("next")}>
                    <img style={style.icon} src={NextSvg} alt="next" />
                </IconButton>
            </div>
        );
    } 
}

Skip.propTypes = {
    streams: PropTypes.array.isRequired,
    streamId: PropTypes.number,
    playStream: PropTypes.func.isRequired
};


function mapStateToProps({streams, activeStream, streamView}){
    return {
        streamView,
        streams,
        streamId: activeStream.id
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        playStream: bindActionCreators(playStream, dispatch),
        playerState: bindActionCreators(playerState, dispatch),
        setView: bindActionCreators(setView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skip);