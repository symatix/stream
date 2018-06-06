import { PLAY_STREAM, SET_VOLUME } from '../constants';
import axios from 'axios';
/* CLIENT PLAYER CODE */
// db
const tempDB = [
    {
        id:1,
        name:'Yammat FM One',
        info:'Sve što trebate čuti.',
        image:'/images/yam_mob_pozadina.jpg',
        url:'http://192.240.102.133:12430/;?_=0.134229652007956'
    },
    {
        id:2,
        name:'Yammat FM Two',
        info:'Sve što trebate čuti.',
        image:'/images/yam_mob_pozadina.jpg',
        url:'http://188.213.165.192:80/;Title1=rpi'
    }
];
// player
var Sound = {
    audio: null,
    isPlaying: false,
    play: function(path, pause) {
        if (pause) {
            return this.audio.pause();
        }
        if(this.audio !== null && !this.audio.paused) this.audio.pause();
        this.audio = new Audio(path);
        this.audio.play();
        this.isPlaying = true;
    },
    stop: function() {
        if(this.audio !== null) this.audio.pause();
        this.isPlaying = false;
    },
};
// url finder
function findUrl(id) {
    const activeStream = tempDB.find( stream => stream.id === id);
    return activeStream.url;
}
/* END OF CLIENT PLAYER CODE */

export const playStream = (id, cb, pause) => dispatch => {
    const url = findUrl(id);
    /* CLIENT PLAYER CODE */
    Sound.play(url, pause)
    /* END OF CLIENT PLAYER CODE */
    return axios.post('/api/play', { id })
        .then(res => {
			dispatch({ type: PLAY_STREAM, payload: res.data.stream });
            dispatch({ type: SET_VOLUME, payload: res.data.volume });

            if (cb) cb();
            }).catch( err => console.log(err));
		
};

export const stopStream = () => dispatch => {
    return axios.post('/api/stop', { player: true }).then(res => {
        dispatch({ type: PLAY_STREAM, payload: {} })
        /* CLIENT PLAYER CODE */
        Sound.stop();
        /* END OF CLIENT PLAYER CODE */
        }).catch(e => console.log(e));  
}