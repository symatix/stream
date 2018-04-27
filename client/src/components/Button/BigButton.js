import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import PauseSvg from '../../svg/pause.svg';
import PlaySvg from '../../svg/play.svg';

const style = {
    root: {
        backgroundColor: 'rgba(66, 66, 66, 0.7)',
        borderRadius: '50%',
        position: 'absolute',
        top: 100,
        left: '50%',
        transform: 'translate(-50%)',
        width: '200px',
        height: '200px'
    },
    button: {
        width: '50%'
    }
}

const BigButton = (props) => {
    let button, label;  
    if(props.play) {
        button = PauseSvg;
        label = "Pause"
    } else {
        button = PlaySvg;
        label = "Play"
    }

    const handlePlay = () => {
        if (props.id && !props.play) {
            return props.func(props.id);
        }
        return props.func();
    }

    return(
        <IconButton style={style.root} aria-label={label} onClick={handlePlay}>
            <img style={style.button} src={button} alt={label} /> 
        </IconButton>
    )
}

BigButton.propTypes = {
    play:PropTypes.bool,
    func:PropTypes.func
};

export default BigButton;