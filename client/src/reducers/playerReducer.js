import { PLAYER_OPEN, PLAYER_CLOSE } from '../constants';

export default function (state = false, action) {

	switch (action.type) {
        case PLAYER_OPEN:
            return action.payload;
		case PLAYER_CLOSE:
			return action.payload;
        
	default:
		return state
	}
}


