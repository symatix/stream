import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaQuery from 'react-responsive';
import SwipeableViews from 'react-swipeable-views';
import Controls from '../Controls/Controls';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import { setView, playStream } from '../../actions';
import StreamCardContent from '../StreamCard/StreamCardContent';
import PlaySvg from '../../svg/big_play.svg';



const styles = {
    root: {
        position: 'relative',
        top: 0,
        left: 0,
		width: '100vw',
        height: '75vh',
        testAlign: 'center'
    },
    button: {
        position: 'absolute',
        top: '10%',
        left: '50%',
        width:'100%',
        height: '100%',
		transform: 'translate(-50%, -37.5%)'
    },
    controls: {
        position:' absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginTop:30,
        textAlign:'center'
    },
    chip: {
        display: 'flex',
        borderRadius: 0,
        opacity: 0.9,
        width: '50%',
        margin: '0 auto',
        '-webkit-clip-path': 'polygon(20% 0, 80% 0, 100% 80%, 0 80%)',
        'clip-path': 'polygon(20% 0, 80% 0, 100% 80%, 0 80%)'
    }
}

class ContainerTablet extends Component {
    state = { index: this.props.view }

    handlePlay = id => {
        this.props.playStream(id);
    }

    renderStreamCards(){
        const { streams, classes } = this.props;
        return streams.map( stream => {
            return(
                    <div key={stream.id} className={classes.root}>
                        <IconButton className={classes.button} aria-label="Menu" onClick={() => this.handlePlay(stream.id)}>
                            <img className={classes.action} src={PlaySvg} alt='Play' />
                        </IconButton>
                        <Chip className={classes.chip} label={stream.name} />
                    </div>
            )
        })
    }

    render() {
        const { view, activeStream, classes } = this.props;
        return (
            <MediaQuery query="(max-width: 767px)">
                <SwipeableViews
                    index={view}>
                    {this.renderStreamCards()}
                </SwipeableViews>
                <Paper className={classes.controls} raised={4}>
                    <StreamCardContent name={activeStream.name} info={activeStream.info} />
                    <Controls active={this.props.active} />
                </Paper>
            </MediaQuery>
        );
    }  
}


function mapDispatchToProps(dispatch){
    return { 
        setView: bindActionCreators(setView, dispatch),
        playStream: bindActionCreators(playStream, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ContainerTablet));