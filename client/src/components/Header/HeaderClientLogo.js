import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import CocktaLogoSvg from '../../svg/cockta_logo.svg';

const styles = {
	root: {
        position: 'relative',
		backgroundColor: 'black',
		width: 160,
        height: 160
	},
	logo: {
        position: 'absolute',
        top: '60%',
        left: '20%',
		width: 150,
        height: 'auto',
        margin: '0 auto'
	}
};

const HeaderClientLogo = (props) => {
	const { classes } = props;
	return (
        <div className={classes.root}>
            <IconButton aria-label="Menu">
                <img className={classes.logo} src={CocktaLogoSvg} alt='cockta-logo' />
            </IconButton>
        </div>
	);
}

HeaderClientLogo.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderClientLogo);