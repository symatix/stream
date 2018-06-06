import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Stop from './Stop';
import Skip from './Skip';
import Volume from './Volume';

const styles = theme => ({
    root: {
        flex: 1,
    }
});

const Controls = (props) => {
    const { classes, active, id } = props;
    return (
        <Grid className={classes.root} item xs={12}>

            <Stop active={active} id={id}/>
            <Skip />
            <Volume />
            
        </Grid>
    );
}

Controls.propTypes = {
    classes:PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Controls);