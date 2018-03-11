import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card, { CardMedia } from 'material-ui/Card';
import { closePlayer } from '../../actions';

import PlayerCardHeader from './PlayerCardHeader';
import PlayerCardContent from './PlayerCardContent';
import PlayerCardActions from './PlayerCardActions';
import PlayerCardDetails from './PlayerCardDetails';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  }
});

class PlayerCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, stream } = this.props;

    return (
      <div>
        <Card className={classes.card}>

            <PlayerCardHeader 
                src={stream.image}
                name={stream.name} />

            <CardMedia
                className={classes.media}
                image={stream.image}
                title={stream.name} />

            <PlayerCardContent 
                info={stream.info} />

            <PlayerCardActions 
                moreInfo={this.state.expanded}
                handleExpand={this.handleExpandClick.bind(this)} />

            <PlayerCardDetails
                expanded={this.state.expanded} />

        </Card>
      </div>
    );
  }
}

PlayerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  stream: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return { 
        closePlayer: bindActionCreators(closePlayer, dispatch)
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(withStyles(styles)(PlayerCard));