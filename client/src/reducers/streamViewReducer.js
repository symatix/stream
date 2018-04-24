import { CHANGE_STREAM_VIEW } from '../constants';

export default function (state = 0, action) {

	switch (action.type) {
        case CHANGE_STREAM_VIEW:
            return action.payload;
        
	default:
		return state
	}
}