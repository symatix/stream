import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

import { openPlayer, playStream } from '../../actions';

const CardAction = (props)  => {

  const handleClick = () => {
    props.playStream(props.stream)
    props.openPlayer();
  }

  return (
        <CardActions>
          <Button onClick={handleClick} size="small" color="primary">
            Play
          </Button>
        </CardActions>
  );
}

CardAction.propTypes = {
  stream:PropTypes.object.isRequired,
  openPlayer: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return { 
    openPlayer: bindActionCreators(openPlayer, dispatch),
    playStream: bindActionCreators(playStream, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CardAction);