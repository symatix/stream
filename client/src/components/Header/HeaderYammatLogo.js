import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import YammatLogoSvg from '../../svg/yammat_logo.svg';

const styles = {
	menuButton: {
		zIndex:100,
		width:220,
		height:220,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 100,
	},
	yammatLogo: {
		width: '100%',
		height: 'auto'
	}
};

const YammatLogo = (props) => {
	const { classes } = props;
	return (
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img className={classes.yammatLogo} src={YammatLogoSvg} alt='yammat-logo' />
        </IconButton>
	);
}

YammatLogo.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YammatLogo);