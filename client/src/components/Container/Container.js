import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Meta from '../Meta/Meta';
import StreamCard from '../StreamCard/StreamCard';
import Controls from '../Controls/Controls';

import ContainerDesktop from './ContainerDesktop';
import ContainerTablet from './ContainerTablet';


const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 20
    },
    controls: {
        marginTop:30,
        textAlign:'center'
    },
    meta: {
        textAlign: 'center',
    }
});

const Container = (props) => {
    const { classes, streams, activeStream, view } = props;
    const active = activeStream['id'] ? true : false;


    const renderStreamCards = () => {
        return streams.map( stream => {
            return(
                <StreamCard 
                    key={stream.id} 
                    activeId={activeStream.id}
                    {...stream} />
            )
        })
    }

    return (
        <div className={classes.root}>
            {/*meta data*/}
            <Grid container justify='center' spacing={16}>
                <Grid item className={classes.meta}>
                    <Meta />
                </Grid>
            </Grid>

            <Grid container justify='center' spacing={16}>
                {/*desktop view*/}
                <ContainerDesktop children={renderStreamCards()} />
                <ContainerTablet children={renderStreamCards()} view={view} /> 
                
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