import { PLAYER_STATE } from '../constants';

export const playerState = state => {
	return { type: PLAYER_STATE, payload: state };
};