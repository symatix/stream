import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Stop from '../Player/PlayerCardActions/Stop';

import { openPlayer, playStream } from '../../actions';

const CardAction = (props)  => {

  const handleClick = () => {
    props.playStream(props.stream.id, ()=> {
      props.openPlayer();
    })
  }

  return (
    <CardActions>
      <Button onClick={handleClick} size="small" color="primary">
        {props.active ? 'Now Playing' : 'Play'}
      </Button>
      {props.active ? <Stop /> : ''}
    </CardActions>
  );
}

CardAction.propTypes = {
  openPlayer: PropTypes.func.isRequired,
  playStream: PropTypes.func.isRequired,
  stream: PropTypes.object.isRequired,
  active: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return { 
    openPlayer: bindActionCreators(openPlayer, dispatch),
    playStream: bindActionCreators(playStream, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CardAction);

