import { GET_STREAMS } from '../constants';
import reducer from './streamsReducer';

describe('REDUCERS - streamsReducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })
    it('should handle GET_STREAMS', () => {
        expect(reducer([], { type: GET_STREAMS, payload: [{}] }))
            .toEqual([{}])
    })
})