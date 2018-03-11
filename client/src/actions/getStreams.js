import axios from 'axios';
import { GET_STREAMS } from '../constants';


export const getStreams = () => dispatch => {
    axios.get('/api/streams')
        .then(res => {
            dispatch({ type: GET_STREAMS, payload: res.data });
        }).catch( err => console.log(err));
	
};