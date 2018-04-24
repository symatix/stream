import { GET_META } from '../constants';

export const getMeta = data => {
	return { type: GET_META, payload: data };
};