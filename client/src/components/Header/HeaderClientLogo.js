import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
    holder: {
        position: 'absolute',
        backgroundColor: 'black',
        top: 0,
        right: 20,
    },
	lgHolder: {
		width: 160,
        height: 160
    },
    smHolder: {
		width: 130,
        height: 130
    },
	logo: {
        margin: '15%',
        width: '70%',
        height: '70%'
	}
};

const HeaderClientLogo = (props) => {
	const { classes, mobile } = props;
	return (
        <div className={mobile 
            ? [classes.holder, classes.smHolder].join(' ')
            : [classes.holder, classes.lgHolder].join(' ')}>
            <img className={classes.logo} src="/images/client.png" alt='client-logo' />
        </div>
	);
}

HeaderClientLogo.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderClientLogo);