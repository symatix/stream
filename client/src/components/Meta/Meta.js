import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMeta } from '../../actions';
// ! import MetaText from './MetaText';
// ! import MetaImg from './MetaImg';
import conf from '../../config';

class Meta extends Component {
    constructor (props) {
        super(props)
        // the idea is to put /{streamId} to url and render it at individual card place
        this.state = {
            source: new EventSource('http://localhost:5000/api/meta'), 
            meta: this.props.metaData
        }
    }
    
    componentDidMount () {
        const { source } = this.state;
        source.addEventListener('connected', ({ data }) => {
            let meta = JSON.parse(data);
            console.log(meta)
            axios
                .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${meta.artist}&api_key=${conf.lastFM_API}&format=json`)
                .then(res => {
                    meta.imgSmall = res.data.artist.image[1]['#text'];
                    meta.imgBig = res.data.artist.image[3]['#text'];
                    this.props.getMeta(meta);
                }).catch(e => console.log(e))
        })
    }

    renderMeta(){
        if(this.props.metaData){
            // ! const {artist, track, imgSmall} = this.props.metaData;
            return(
                <div>
                    {/*<MetaImg artist={artist} image={imgSmall} /> */}
                    {/*<MetaText artist={artist} track={track} /> */}
                </div>
            )
        }
    }

    render () {
        return (
            <div style={{ display: 'block', flex: 1 }}>
                {this.renderMeta()}
            </div>
        )
    }
}

function mapSateToProps({activeStream, metaData}){
    return { activeStream, metaData }
}

function mapDispatchToProps(dispatch){
    return { 
        getMeta: bindActionCreators(getMeta, dispatch)
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Meta);
