import React from 'react';
import PropTypes from 'prop-types';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const StreamCardContent = (props) => {
	const { name, info } = props;
	return (
        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                <strong>{name}</strong>
            </Typography>
            <Typography component="p" color='primary'>
                {info}
            </Typography>
        </CardContent>
	);
}

StreamCardContent.propTypes = {
	name: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
};

export default StreamCardContent;