import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MediaQuery from 'react-responsive';
import Grid from 'material-ui/Grid';
import Meta from '../Meta/Meta';
import Controls from '../Controls/Controls';

const styles = theme => ({
    controls: {
        marginTop:30,
        textAlign:'center'
    },
    meta: {
        textAlign: 'center',
    }
});

const ContainerDesktop = (props) => {
    const { classes, children, active, activeId } = props;

    return (
        <MediaQuery query="(min-width: 1224px)">

            <Grid container justify='center' spacing={16}>
                <Grid item className={classes.meta}>
                    <Meta />
                </Grid>
            </Grid>
            
            <Grid container justify='center' spacing={16}>
                {children}
            </Grid>

            <Grid className={classes.controls} container spacing={16}>
                <Controls active={active} id={activeId}/>
            </Grid>
            
        </MediaQuery>
    );
}

ContainerDesktop.propTypes = {
    classes:PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ContainerDesktop);