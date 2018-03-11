import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import PlayerCard from './PlayerCard';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const Player = (props) => {
    const { state, stream, volume } = props;

    const renderPlayer = () => {
        if (state) {
            return <PlayerCard stream={stream} volume={volume}/>
        }
    }

    return (
        <Dialog
            open={state}
            transition={Transition}
            keepMounted
            aria-labelledby="stream-player"
            aria-describedby="stream-player">
            <div>
                {renderPlayer()}
            </div>
        </Dialog>
    );
}

Player.propTypes = {
  stream: PropTypes.object.isRequired,
  state: PropTypes.bool.isRequired
};

export default Player;