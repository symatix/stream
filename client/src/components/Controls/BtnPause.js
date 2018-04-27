import React from 'react';
import PauseSvg from '../../svg/pause.svg';

const style = {
    root: {
        backgroundColor: 'rgba(66, 66, 66, 0.6)',
        borderRadius: '50%',
        width: '50%',
    },
    button: {
        width: '50%'
    }
}

const PauseBtn = (props) => {
    return(
        <div style={style.root}>
            <img style={style.button} src={PauseSvg} alt="Pause" /> 
        </div>
    )
}

export default PauseBtn;