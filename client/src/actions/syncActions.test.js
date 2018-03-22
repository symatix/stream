import * as playerState from './playerState'
import * as switchStream from './switchStream'
import { PLAYER_OPEN, PLAYER_CLOSE, NEXT_STREAM, PREVIOUS_STREAM } from '../constants';
import streamsMock from '../init/streams';

describe('SYNC ACTIONS: ', () =>{
    it('playerState should return an action returning correct player state', () => {
        const actionOpen = { payload: true, type: PLAYER_OPEN };
        const actionClose = { payload: false, type: PLAYER_CLOSE };
        
        expect(playerState.openPlayer()).toEqual(actionOpen);
        expect(playerState.closePlayer()).toEqual(actionClose);
    })
    it('switchStream should return injected stream', () => {
        const actionNextStream = { payload: streamsMock[0], type: NEXT_STREAM };
        const actionPrevStream = { payload: streamsMock[0], type: PREVIOUS_STREAM };
        
        expect(switchStream.nextStream(streamsMock[0])).toEqual(actionNextStream);
        expect(switchStream.prevStream(streamsMock[0])).toEqual(actionPrevStream);
    })
})