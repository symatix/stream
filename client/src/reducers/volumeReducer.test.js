import { SET_VOLUME } from '../constants';
import reducer from './volumeReducer';

describe('REDUCERS - volumeReducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(null)
    })
    it('should handle GET_STREAMS', () => {
        expect(reducer([], { type: SET_VOLUME, payload: { volume: 1 } }))
            .toEqual({ volume: 1 })
    })
})