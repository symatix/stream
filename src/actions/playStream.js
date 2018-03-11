import { PLAY_STREAM } from '../constants';

export const playStream = (stream) => {
	return { type: PLAY_STREAM, payload: stream };
};