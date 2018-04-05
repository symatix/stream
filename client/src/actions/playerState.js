import { PLAYER_OPEN, PLAYER_CLOSE } from '../constants';

export const openPlayer = () => {
	return { type: PLAYER_OPEN, payload: true };
};

export const closePlayer = () => {
	return { type: PLAYER_CLOSE, payload: false };
};