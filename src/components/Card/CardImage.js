import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';

const styles = {
  media: {
    height: 200,
  },
};

const CardImage = (props) => {
    const { classes, src, alt } = props;
    return (
        <CardMedia
            className={classes.media}
            image={src}
            title={alt}
        />
  );
}

CardImage.propTypes = {
    classes: PropTypes.object.isRequired,
    src:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
};

export default withStyles(styles)(CardImage);