import axios from 'axios';
import { GET_STREAMS } from '../constants';


export const getStreams = () => dispatch => {
    return axios.get('/api/streams')
        .then(res => {
            return dispatch({ type: GET_STREAMS, payload: res.data });
        }).catch( err => console.log(err));
	
};