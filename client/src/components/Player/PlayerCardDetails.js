import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    container: {
        margin:'15px',
        borderTop: '3px solid white',
        borderBottom: '3px solid white'
    },
  });

const PlayerCardDetails = (props) => {
    const { classes, expanded } = props;

    return (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.container}>
                <Typography paragraph variant="body2">
                    Artist | <strong>{"Radost"}</strong> 
                </Typography>
                <Typography paragraph variant="caption">
                    {"U Zoni"}  |  {"Ali Nismo"}
                </Typography>
                <Typography align="right">
                    <strong>{"2017"}</strong>  | Year
                </Typography>
            </CardContent>
        </Collapse>
    );
}

PlayerCardDetails.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default withStyles(styles)(PlayerCardDetails);