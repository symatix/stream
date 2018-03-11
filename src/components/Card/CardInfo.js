import React from 'react';
import PropTypes from 'prop-types';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const CardInfo = (props) => {
    const { name, info } = props;

    return (
        <CardContent>
            <Typography variant="headline" component="h2">
                {name}
            </Typography>
            <Typography component="p">
                {info}
            </Typography>
        </CardContent>
    );
}

CardInfo.propTypes = {
  name:PropTypes.string.isRequired,
  info:PropTypes.string.isRequired
};

export default CardInfo;