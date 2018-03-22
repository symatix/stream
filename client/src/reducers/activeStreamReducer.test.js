import { PLAY_STREAM, NEXT_STREAM, PREVIOUS_STREAM } from '../constants';
import reducer from './activeStreamReducer';

describe('REDUCERS - activeStreamReducer', () => {
    const payload = { id:124, name:'NAME', info:'INFO', image:'IMAGE', url:'URL' };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
    it('should handle PLAY_STREAM', () => {
        expect(reducer({}, { type: PLAY_STREAM, payload }))
            .toEqual(payload)
    })
    it('should handle NEXT_STREAM', () => {
        expect(reducer({}, { type: NEXT_STREAM, payload }))
            .toEqual(payload)
    })
    it('should handle PREVIOUS_STREAM', () => {
        expect(reducer({}, { type: PREVIOUS_STREAM, payload }))
            .toEqual(payload)
    })
})