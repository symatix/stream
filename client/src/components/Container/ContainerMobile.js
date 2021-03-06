import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaQuery from 'react-responsive';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import Controls from '../Controls/Controls';
import { setView, playStream, stopStream, playerState } from '../../actions';
import StreamCardContent from '../StreamCard/StreamCardContent';
import Pagination from '../Pagination/Pagination';
import BigButton from '../Button/BigButton';

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
        zIndex: 100,
        marginTop: '-100px'
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
        paddingTop:25,
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
        this.handlePlay = this.handlePlay.bind(this)
        this.handleStop = this.handleStop.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if (this.props.view !== nextProps.view){
            this.setState({index: nextProps.view})
        }
    }

    handlePlay = (id) => {
        console.log(id)
        this.props.playerState(true)
        this.props.playStream(id);
    }
    handleStop = (id) => {
        if (!this.props.player) {
            return this.handlePlay(id);
        }
        this.props.playerState(false)
        this.props.stopStream();
    }

    // * renders the big button for each stream 
    renderStreamCards(){
        const { player, streams, activeId, classes } = this.props;
        return streams.map( stream => {
            return(
                <div key={stream.id} className={classes.playHolder}>
                    <BigButton 
                        func={player 
                            ? () => this.handleStop(stream.id)
                            : () => this.handlePlay(stream.id)} 
                        play={activeId === stream.id} 
                        id={stream.id}/>
                </div>
            )
        })
    }

    handleSwipe(index){
        this.setState({index})
    }

    getInfo(){
        if (this.props.streams[0]){
            return [
                this.props.streams[this.state.index].name,
                this.props.streams[this.state.index].info
            ]
        }
        return ['', ''];
    }

    render() {
        const { classes, activeId } = this.props;
        return (
            <MediaQuery query="(max-width: 767px)">
                <div className={classes.root}>
                    <YammatLogo mobile={true} />
                    <ClientLogo mobile={true} />
                    
                    <SwipeableViews
                        index={this.state.index}
                        onChangeIndex={this.handleSwipe}>
                        {this.renderStreamCards()}
                    </SwipeableViews>
                    
                    <Paper className={classes.controls} raised={0}>
                        <Pagination dots={2} index={this.state.index} onChangeIndex={this.handleSwipe} />
                        <StreamCardContent name={this.getInfo()[0]} info={this.getInfo()[1]} />
                        <Controls active={this.props.active} id={activeId}/>
                        <br/>
                    </Paper>
                </div>
            </MediaQuery>
        );
    }  
}

function mapStateToProps({player}){
    return { player }
}

function mapDispatchToProps(dispatch){
    return { 
        setView: bindActionCreators(setView, dispatch),
        playStream: bindActionCreators(playStream, dispatch),
        playerState: bindActionCreators(playerState, dispatch),
        stopStream: bindActionCreators(stopStream, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContainerTablet));