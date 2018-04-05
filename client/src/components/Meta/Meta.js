import React, { Component } from 'react';
import MetaText from './MetaText';
import MetaImg from './MetaImg';

class Meta extends Component {
    constructor (props) {
        super(props)
        // the idea is to put /{streamId} to url and render it at individual card place
        this.state = {
            source: new EventSource('http://localhost:5000/api/meta'), 
            meta: null
        }
    }
    
    componentDidMount () {
        const { source } = this.state;
        source.addEventListener('connected', ({ data }) => {
            this.setState({ meta: JSON.parse(data) })
        })
    }

    renderMeta(){
        if(this.state.meta){
            const {artist, track} = this.state.meta;
            return(
                <div>
                    <MetaImg artist={artist} />
                    <MetaText artist={artist} track={track} />
                </div>
            )
        }
    }

    render () {
        return (
            <div>
                {this.renderMeta()}
            </div>
        )
    }
}
  
export default Meta;
