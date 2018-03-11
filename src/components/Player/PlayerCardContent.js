import React from 'react';
import PropTypes from 'prop-types';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const PlayerCardContent = (props) => {
    const { info } = props;

    return (
        <CardContent>
            <Typography component="p">
                {info}
            </Typography>
        </CardContent>
    );
}

PlayerCardContent.propTypes = {
    info: PropTypes.string.isRequired,
};

export default PlayerCardContent;