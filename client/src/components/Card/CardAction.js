import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import PlayerCardActions from '../Player/PlayerCardActions';

import { openPlayer, playStream } from '../../actions';

const CardAction = (props)  => {

  const handleClick = () => {
    props.playStream(props.stream.id, ()=> {
      props.openPlayer();
    })
    
  }
  console.log(props)
  return (
        <CardActions>
          <Button onClick={handleClick} size="small" color="primary">
            {props.active ? 'Now Playing' : 'Play'}
          </Button>
        </CardActions>
  );
}

CardAction.propTypes = {
  stream:PropTypes.object.isRequired,
  openPlayer: PropTypes.func.isRequired,
  active: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return { 
    openPlayer: bindActionCreators(openPlayer, dispatch),
    playStream: bindActionCreators(playStream, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CardAction);

