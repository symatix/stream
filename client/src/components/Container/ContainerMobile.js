import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaQuery from 'react-responsive';
import SwipeableViews from 'react-swipeable-views';
import Controls from '../Controls/Controls';
import Paper from 'material-ui/Paper';
import { setView, playStream, stopStream } from '../../actions';
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
    }

    componentWillReceiveProps(nextProps){
        if (this.props.view !== nextProps.view){
            this.setState({index: nextProps.view})
        }
    }

    handlePlay = id => {
        if (this.props.activeId === id){
            return this.props.stopStream();
        }
        return this.props.playStream(id);
    }

    renderStreamCards(){
        const { streams, activeId, classes } = this.props;
        return streams.map( stream => {
            return(
                <div key={stream.id} className={classes.playHolder}>
                    <BigButton func={this.handlePlay} play={activeId === stream.id} id={stream.id}/>
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
        const { classes } = this.props;
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
                            <Pagination dots={3} index={this.state.index} onChangeIndex={this.handleSwipe} />
                            <StreamCardContent name={this.getInfo()[0]} info={this.getInfo()[1]} />
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
        playStream: bindActionCreators(playStream, dispatch),
        stopStream: bindActionCreators(stopStream, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ContainerTablet));