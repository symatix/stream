import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import ClientLogo from './HeaderClientLogo';
import YammatLogo from './HeaderYammatLogo';

import backgroundDesktop from './background_desk.jpg'; 

const styles = {
	root: {
		flexGrow: 1,
	},
	header: {
		position: 'relative',
		height: 160,
		backgroundImage: `url(${backgroundDesktop})`
	},
	flex: {
		position: 'absolute',
		top: 0,
		right: 15
	}
};

const Header = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.header}>
					<YammatLogo />
					<ClientLogo />
				</Toolbar>
			</AppBar>
		</div>
	);
}

Header.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);