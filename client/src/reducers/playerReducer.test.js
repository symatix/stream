import { PLAYER_OPEN, PLAYER_CLOSE } from '../constants';
import reducer from './playerReducer';

describe('REDUCERS - playerReducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(false)
    })
    it('should handle PLAYER_OPEN', () => {
        expect(reducer(false, { type: PLAYER_OPEN, payload: true }))
            .toEqual(true)
    })
    it('should handle PLAYER_CLOSE', () => {
        expect(reducer(false, { type: PLAYER_CLOSE, payload: false }))
            .toEqual(false)
    })
})