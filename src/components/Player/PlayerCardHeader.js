import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CardHeader } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';
import { closePlayer } from '../../actions';

const styles = theme => ({
  avatar: {
    widht: 50,
    height: 50,
    borderRadius:'50%'
  },
});

const PlayerCardHeader = (props) => {
    const { classes, name, src, closePlayer } = props;

    const handleClose = () => {
        closePlayer();
    };


    return (
        <CardHeader
            avatar={
                <img className={classes.avatar} src={src} alt={name} />
            }
            action={
            <IconButton>
                <Close onClick={handleClose} />
            </IconButton>
            }
            title={name}
            subheader="now streaming"
        />
    );
}

PlayerCardHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    closePlayer: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return { 
        closePlayer: bindActionCreators(closePlayer, dispatch)
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(withStyles(styles)(PlayerCardHeader));