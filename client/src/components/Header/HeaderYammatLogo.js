import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import YammatLogoSvg from '../../svg/yammat_logo.svg';

const styles = {
	lgBtn: {
		zIndex:100,
		width:220,
		height:220,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 100,
	},
	smBtn: {
		zIndex:100,
		width:140,
		height:140,
		margin: 15,
	},
	yammatLogo: {
		width: '100%',
		height: 'auto'
	}
};

const YammatLogo = (props) => {
	const { classes, mobile } = props;
	return (
        <IconButton className={mobile ? classes.smBtn : classes.lgBtn} color="inherit" aria-label="Menu">
            <img className={classes.yammatLogo} src={YammatLogoSvg} alt='yammat-logo' />
        </IconButton>
	);
}

YammatLogo.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YammatLogo);