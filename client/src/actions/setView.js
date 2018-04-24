import { CHANGE_STREAM_VIEW } from '../constants';

export const setView = index => {
	return { type: CHANGE_STREAM_VIEW, payload: index };
};