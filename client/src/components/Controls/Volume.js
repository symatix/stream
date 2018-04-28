import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import style from './style';
import Speaker0 from '../../svg/ctrl_speaker0.svg'
import Speaker1 from '../../svg/ctrl_speaker1.svg'
import Speaker2 from '../../svg/ctrl_speaker2.svg'
import Speaker3 from '../../svg/ctrl_speaker3.svg'
import Speaker4 from '../../svg/ctrl_speaker4.svg'
import VolDown from '../../svg/ctrl_minus.svg'
import VolUp from '../../svg/ctrl_plus.svg'


class Volume extends Component {
    state = { 
        volume: this.props.volume
    }

    handleChange(event){
        const volume = Math.round(event.target.value);
        this.apiVolumeChange(volume);
    }

    handleVolumeUp(){
        let volume = this.state.volume + 5;
        volume = volume < 96 ? volume : 96;
        this.apiVolumeChange(volume);
    }

    handleVolumeDown(){
        let volume = this.state.volume - 5;
        volume = volume < 50 ? 50 : volume;
        this.apiVolumeChange(volume);
    }

    apiVolumeChange(volume){
        this.setState({ volume });

        axios.post('/api/volume', { volume })
            .catch(err => console.log(err));
    }

    renderSpeaker(){
        const { volume } = this.state;
            if (volume < 55) {return <img src={Speaker0} alt="volume" style={style.icon} />;}
            if (volume < 70) {return <img src={Speaker1} alt="volume" style={style.icon} />;}
            if (volume < 80) {return <img src={Speaker2} alt="volume" style={style.icon} />;}
            if (volume < 90) {return <img src={Speaker3} alt="volume" style={style.icon} />;}
            if (volume < 100) {return <img src={Speaker4} alt="volume" style={style.icon} />;}
    }

    render(){
        return (
            <div style={{display:'inline-block'}}>
                <IconButton style={style.iconHolder} color="primary" aria-label="Volume Down"  onClick={this.handleVolumeDown.bind(this)}>
                    <img src={VolDown} alt="volume-down" style={style.icon} />
                </IconButton>
                <IconButton disabled style={style.iconHolder} color="primary" aria-label="Volume">
                    {this.renderSpeaker()}
                </IconButton>
                <IconButton style={style.iconHolder} color="primary" aria-label="Volume Up"  onClick={this.handleVolumeUp.bind(this)}>
                    <img src={VolUp} alt="volume-up"  style={style.icon} />
                </IconButton>
            </div>
        );
    } 
}


function mapStateToProps({volume}){
    return { volume }
}

export default connect(mapStateToProps)(Volume);