import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import StreamCard from '../StreamCard/StreamCard';

import ContainerDesktop from './ContainerDesktop';
import ContainerTablet from './ContainerTablet';
import ContainerMobile from './ContainerMobile';


const styles = theme => ({
    root: {
        flexGrow: 1
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
            <ContainerDesktop children={renderStreamCards()} active={active} activeId={activeStream.id}/>
            <ContainerTablet children={renderStreamCards()} active={active} view={view} activeId={activeStream.id}/> 
            <ContainerMobile streams={streams} active={active} view={view} activeStream={activeStream} activeId={activeStream.id}/> 
        </div>
    );
}

Container.propTypes = {
    classes:PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Container);