import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';

import CardImage from './CardImage';
import CardInfo from './CardInfo';
import CardAction from './CardAction';

const styles = {
    card: {
      height: 380,
    },
  };

const StreamCard = (props) => {
    const { name, info, image } = props.stream;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={props.classes.card} >
                <CardImage src={image} alt={name} />
                <CardInfo name={name} info={info} />
                <CardAction stream={props.stream} />
            </Card>
        </Grid>
    );
}

StreamCard.propTypes = {
    classes: PropTypes.object.isRequired,
    stream:PropTypes.object.isRequired,
};

export default withStyles(styles)(StreamCard);