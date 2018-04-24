import React from 'react';
import Typography from 'material-ui/Typography';

const MetaText = props => {
    const { artist, track } = props;

    return (
        <Typography style={{display: 'inline-block'}} variant="display1" align="center" color='primary' gutterBottom>
            {artist} {artist && track ? '-' : ''} {track}
        </Typography>
    )
}
  
export default MetaText;


