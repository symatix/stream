import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import SkipPrevious from 'material-ui-icons/SkipPrevious';
import SkipNext from 'material-ui-icons/SkipNext';
import { playStream, setView } from '../../actions';
import style from './style';
  
class Skip extends Component {

    handleStreamChange(action){
        const { streams, streamId, streamView } = this.props;
        let index;
        if (action === 'prev'){
            index = streamView - 1 >= 0 
                ? streamView - 1 
                : streams.length - 1;
        }
        if (action === 'next'){
            index = streamView + 1 === streams.length 
                ? 0 
                : streamView + 1;
        }
        this.props.playStream(streams[index].id)
        this.props.setView(index);
    }

    render(){
        return (
            <div style={{display:'inline-block'}}>

                <IconButton 
                    color="primary" 
                    aria-label="Prev Stream" 
                    onClick={() => this.handleStreamChange("prev")}>
                    <SkipPrevious style={style.icon}/>
                </IconButton>

                <IconButton 
                    color="primary" 
                    aria-label="Next Stream" 
                    onClick={() => this.handleStreamChange("next")}>
                    <SkipNext style={style.icon}/>
                </IconButton>
            </div>
        );
    } 
}

Skip.propTypes = {
    streams: PropTypes.array.isRequired,
    streamId: PropTypes.number,
    playStream: PropTypes.func.isRequired
};


function mapStateToProps({streams, activeStream, streamView}){
    return {
        streamView,
        streams,
        streamId: activeStream.id
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        playStream: bindActionCreators(playStream, dispatch),
        setView: bindActionCreators(setView, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skip);