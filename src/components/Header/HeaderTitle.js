import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  flex: {
    flex: 1,
  }
};

const HeaderTitle = (props) => {
    const { classes } = props;

    return (
        <Typography variant="title" color="inherit" className={classes.flex}>
            BoomPlay
        </Typography>
    );
}

HeaderTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderTitle);