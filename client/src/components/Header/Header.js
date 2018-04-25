import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import MediaQuery from 'react-responsive';

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
		
			<MediaQuery query="(min-width: 768px)">
				<AppBar position="static">
					<Toolbar className={classes.header}>
						<YammatLogo mobile={false} />
						<ClientLogo mobile={false} />
					</Toolbar>
				</AppBar>
			</MediaQuery>
			
			<MediaQuery query="(max-width: 767px)">
				<YammatLogo mobile={true} />
				<ClientLogo mobile={true} />
			</MediaQuery>
		</div>
	);
}

Header.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);