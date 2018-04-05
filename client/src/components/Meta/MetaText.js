import React from 'react';
import Typography from 'material-ui/Typography';

const MetaText = props => {
    const { artist, track } = props;

    return (
        <Typography noWrap={true} variant="caption" gutterBottom align="center">
            {artist} {track}
        </Typography>
    )
}
  
export default MetaText;


