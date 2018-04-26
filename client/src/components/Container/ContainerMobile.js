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
import PauseSvg from '../../svg/pause.svg';

import ClientLogo from '../Header/HeaderClientLogo';
import YammatLogo from '../Header/HeaderYammatLogo';


const styles = {
    root: {
        position: 'relative',
        top: 0,
        left: 0,
		width: '100vw',
        height: '100vh',
        testAlign: 'center'
    },
    playHolder: {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: 300,
        zIndex: 100
    },
    button: {
        position: 'absolute',
        top: '20%',
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
    constructor(props){
        super(props);
        this.state = { index: this.props.view }

        this.handleSwipe = this.handleSwipe.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if (this.props.view !== nextProps.view){
            this.setState({index: nextProps.view})
        }
    }

    handlePlay = id => {
        this.props.playStream(id);
    }

    renderStreamCards(){
        const { streams, classes } = this.props;
        return streams.map( stream => {
            return(
                    <div key={stream.id} className={classes.playHolder}>
                        

                        <IconButton className={classes.button} aria-label="Menu" onClick={() => this.handlePlay(stream.id)}>
                            <img className={classes.action} src={PlaySvg} alt='Play' />
                        </IconButton>
                    </div>
            )
        })
    }
    handleSwipe(index){
        this.setState({index})
    }

    getName(){
        let name = '';
        if (this.props.streams[0]){
            name = this.props.streams[this.state.index].name;
        }
        console.log(name)
        return name;
    }
    getInfo(){
        let info = '';
        if (this.props.streams[0]){
            info = this.props.streams[this.state.index].info;
        }
        console.log(info)
        return info;
    }

    render() {
        const { view, activeStream, streams, classes } = this.props;
        console.log(streams)
        return (
            <MediaQuery query="(max-width: 767px)">
                <div className={classes.root}>
                    <YammatLogo mobile={true} />
                    <ClientLogo mobile={true} />
                    <SwipeableViews
                        index={view}
                        onChangeIndex={this.handleSwipe}>
                        {this.renderStreamCards()}
                    </SwipeableViews>
                        <Paper className={classes.controls} raised={0}>
                            <StreamCardContent name={this.getName()} info={this.getInfo()} />
                            <Controls active={this.props.active} />
                            <br/>
                        </Paper>
                </div>
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