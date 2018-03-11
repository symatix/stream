import { GET_STREAMS } from '../constants';

export default function (state = [], action) {

	switch (action.type) {
		case GET_STREAMS:
			return action.payload;
			
		default:
			return state
	}
}