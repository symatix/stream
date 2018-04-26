import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import PlaySvg from '../../svg/big_play.svg';
import PauseSvg from '../../svg/pause.svg';
import Pause from '../Controls/BtnPause';
import { playStream, stopStream } from '../../actions';

const styles = {
	root: {
		display: 'flex',
		position: 'absolute',
		top: '30%',
        left: '50%',
        width: '100%',
        height: '80%',
		transform: 'translate(-50%, -37.5%)'
    },
    button: {
        width: '50%'
    }
};

const StreamCardAction = (props) => {
    const { classes, id, playStream, stopStream, isActive } = props;
    
    const handlePlay = () => {
        playStream(id);
    }
    const handleStop = () => {
        stopStream();
    }

	return (
        <IconButton className={classes.root} aria-label="Menu">
        {/*isActive 
            ? <img className={classes.button} src={PauseSvg} alt='Stop' onClick={handleStop} />
        : <img className={classes.button} src={PlaySvg} alt='Play' onClick={handlePlay} />*/}
            <img className={classes.button} src={PlaySvg} alt='Play' onClick={handlePlay} />
        </IconButton>
	);
}

StreamCardAction.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return { 
        playStream: bindActionCreators(playStream, dispatch),
        stopStream: bindActionCreators(stopStream, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(StreamCardAction));