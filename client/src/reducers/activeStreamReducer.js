import { PLAY_STREAM, NEXT_STREAM, PREVIOUS_STREAM } from '../constants';

export default function (state = {}, action) {

	switch (action.type) {
        case PLAY_STREAM:
            return action.payload;
		case NEXT_STREAM:
			return action.payload;
		case PREVIOUS_STREAM:
			return action.payload;
        
	default:
		return state
	}
}