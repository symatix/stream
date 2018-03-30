import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Stop from './PlayerCardActions/Stop';
import Skip from './PlayerCardActions/Skip';
import Volume from './PlayerCardActions/Volume';

const styles = theme => ({
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class PlayerCardActions extends Component {
    render(){
        
        const { classes, moreInfo, handleExpand } = this.props;
        return (
            <CardActions className={classes.actions} disableActionSpacing>
                <Stop />
                <Skip />
                <Volume />
                
                <IconButton
                    color="primary"
                    onClick={handleExpand}
                    aria-expanded={moreInfo}
                    aria-label="Show more"
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: moreInfo,
                    })}>
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        );
    } 
}

PlayerCardActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(PlayerCardActions));