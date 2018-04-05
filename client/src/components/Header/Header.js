import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import HeaderMenuButton from './HeaderMenuButton';
import HeaderTitle from './HeaderTitle';
import HeaderProfileButton from './HeaderProfileButton';
import Meta from '../Meta/Meta';

const styles = {
  root: {
    flexGrow: 1,
  },
  positionFixed: {
    height: 64,
    bottom:0
  }
};

const Header = (props) => {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.positionFixed} position="static" color="default">
          <Toolbar>
            <HeaderMenuButton />
            <HeaderTitle />
            <Meta />
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