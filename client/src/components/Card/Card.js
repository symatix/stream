import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import { grey } from 'material-ui/colors';

import CardImage from './CardImage';
import CardInfo from './CardInfo';
import CardAction from './CardAction';

const styles = {
    card: {
        position: 'relative',
        height: 380,
    },
    cardActive:{
        position: 'relative',
        height: 380,
        backgroundColor:grey[900]
    },
    cardAction: {
        position: 'absolute',
        bottom: 10,
        left: 5
    }
  };

const StreamCard = (props) => {
    const { name, info, image } = props.stream;
    const { active, classes } = props;

    const cardClass = active ? classes.cardActive : classes.card;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card 
                className={cardClass} 
                raised={active} >
                <CardImage 
                    src={image} 
                    alt={name} />
                <CardInfo 
                    name={name} 
                    info={info} />
                <div className={classes.cardAction}>
                    <CardAction 
                        stream={props.stream} 
                        active={active}/>
                </div>
            </Card>
        </Grid>
    );
}

StreamCard.propTypes = {
    classes: PropTypes.object.isRequired,
    stream:PropTypes.object.isRequired,
    active: PropTypes.bool
};

export default withStyles(styles)(StreamCard);