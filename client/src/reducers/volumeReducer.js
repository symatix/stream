import { SET_VOLUME } from '../constants';

export default function (state = null, action) {

	switch (action.type) {
        case SET_VOLUME:
            return action.payload;
        
		default:
			return state
	}
}


