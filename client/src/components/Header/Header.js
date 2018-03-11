import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import HeaderMenuButton from './HeaderMenuButton';
import HeaderTitle from './HeaderTitle';
import HeaderProfileButton from './HeaderProfileButton';

const styles = {
  root: {
    flexGrow: 1,
  }
};

const Header = (props) => {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <HeaderMenuButton />
            <HeaderTitle />
            <HeaderProfileButton />
          </Toolbar>
        </AppBar>
      </div>
    );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);