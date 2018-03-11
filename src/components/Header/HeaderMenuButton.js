import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    width: 47,
    height:25
  }
};

const HeaderMenuButton = (props) => {
    const { classes } = props;

    return (
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img className={classes.logo} src="/images/yammat-logo-black.png" alt="logo" />
        </IconButton>
    );
}

HeaderMenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenuButton);