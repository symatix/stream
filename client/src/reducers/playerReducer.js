import { PLAYER_STATE } from '../constants';

export default function (state = false, action) {
	switch (action.type) {
		case PLAYER_STATE:
            return action.payload;
        
	default:
		return state
	}
}


