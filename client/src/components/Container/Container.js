import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import StreamCard from '../StreamCard/StreamCard';
import Controls from '../Controls/Controls';

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 90
    },
    controls: {
        paddingTop:30,
        textAlign:'center'
    }
});

const Container = (props) => {
    const { classes, streams, activeStream } = props;
    const active = activeStream['id'] ? true : false;
    
    return (
        <div className={classes.root}>
        <Grid container spacing={16}>

            {streams.map( stream => {
                return(
                    <StreamCard 
                        key={stream.id} 
                        activeId={activeStream.id}
                        {...stream} />
                )
            })}

        </Grid>
        <Grid className={classes.controls} container spacing={16}>
            <Controls active={active} />
        </Grid>
        </div>
    );
}

Container.propTypes = {
    classes:PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Container);