import { NEXT_STREAM, PREVIOUS_STREAM } from '../constants';

export const nextStream = (stream) => {
	return { type: NEXT_STREAM, payload: stream };
};

export const prevStream = (stream) => {
	return { type: PREVIOUS_STREAM, payload: stream };
};