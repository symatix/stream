import { GET_META } from '../constants';

export default function (state = {}, action) {

	switch (action.type) {
        case GET_META:
            return action.payload;
        
	default:
		return state
	}
}