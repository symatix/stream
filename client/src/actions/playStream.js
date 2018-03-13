import { PLAY_STREAM, SET_VOLUME } from '../constants';
import axios from 'axios';

export const playStream = (id, cb) => dispatch => {
    axios.post('/api/play', { id })
        .then(res => {
			dispatch({ type: PLAY_STREAM, payload: res.data.stream });
			dispatch({ type: SET_VOLUME, payload: res.data.volume });
			if (cb){ cb() }
        }).catch( err => console.log(err));
		
};