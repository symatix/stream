import React from 'react';
import IconButton from 'material-ui/IconButton';
import PauseSvg from '../../svg/pause.svg';

const style = {
    button: {
        backgroundColor: 'rgba(66, 66, 66, 0.6)',
        borderRadius: '50%',
        width: '50%'
    }
}

const PauseBtn = (props) => {
    return(
        <img style={style.button} src={PauseSvg} alt="Pause" />
    )
}

export default PauseBtn;