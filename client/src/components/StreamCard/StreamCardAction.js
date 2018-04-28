import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BigButton from '../Button/BigButton';
import { playStream, stopStream, playerState } from '../../actions';

const StreamCardAction = (props) => {
    const { id, player, playStream, stopStream, playerState, isActive } = props;

    const handlePlay = () => {
        playerState(true)
        playStream(id);
    }
    const handleStop = () => {
        if (!player) {
            return handlePlay();
        }
        playerState(false)
        stopStream();
    }

	return (
        <BigButton 
            func={isActive ? handleStop : handlePlay} 
            play={isActive} 
            id={props.id} />
	);
}

StreamCardAction.propTypes = {
    id: PropTypes.number.isRequired
};

function mapStateToProps({ player }){
    return { player }
}

function mapDispatchToProps(dispatch) {
    return { 
        playStream: bindActionCreators(playStream, dispatch),
        playerState: bindActionCreators(playerState, dispatch),
        stopStream: bindActionCreators(stopStream, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamCardAction);