import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BigButton from '../Button/BigButton';
import { playStream, stopStream } from '../../actions';

const StreamCardAction = (props) => {
    const { id, playStream, stopStream, isActive } = props;
    
    const handlePlay = () => {
        playStream(id);
    }
    const handleStop = () => {
        stopStream();
    }

	return (
        <BigButton 
            func={isActive ? handleStop : handlePlay} 
            play={isActive} />
	);
}

StreamCardAction.propTypes = {
    id: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return { 
        playStream: bindActionCreators(playStream, dispatch),
        stopStream: bindActionCreators(stopStream, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(StreamCardAction);