import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

import Card from '../Card/Card';

const Container = (props) => {

    const renderCards = () => {
        return props.streams.map( stream => <Card 
            key={stream.id} 
            stream={stream} 
            active={stream.id === props.activeStream.id ? true : false} /> 
        )
    }
    return (
        <Grid container spacing={8}>
            {renderCards()}
        </Grid>
    );
}

Container.propTypes = {
    streams:PropTypes.array.isRequired,
    activeStream: PropTypes.object
};

export default Container;