import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import ClientLogo from './HeaderClientLogo';
import YammatLogo from './HeaderYammatLogo';

import backgroundDesktop from './background_desk.jpg'; 

const styles = {
	root: {
		flexGrow: 1,
	},
	header: {
		height: 160,
		backgroundImage: `url(${backgroundDesktop})`
	},
	flex: {
		flex: 1,
	}
};

const Header = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.header}>
				<Toolbar>
					<YammatLogo />
					<Typography variant="title" color="inherit" className={classes.flex}>
						{''}
					</Typography>
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