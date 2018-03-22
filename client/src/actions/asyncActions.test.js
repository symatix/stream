import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { getStreams } from './getStreams'
import { playStream } from './playStream'
import { GET_STREAMS, PLAY_STREAM, SET_VOLUME } from '../constants';
import getStreamsMock from '../init/streams';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ASYNC ACTIONS: ', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('getStreams action creates GET_STREAMS after successfuly fetching streams', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: getStreamsMock,
            });
        });

        const expectedActions = [{ type: GET_STREAMS, payload: getStreamsMock }];
        const store = mockStore({ streams: [] })

        return store.dispatch(getStreams()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('playStream action creates PLAY_STREAM and SET_VOLUME after successfuly fetching active stream', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    stream: getStreamsMock[0],
                    volume: 0.75
                },
            });
        });

        const expectedActions = [
            { type: PLAY_STREAM, payload: getStreamsMock[0] },
            { type: SET_VOLUME, payload: 0.75 }
        ];
        const store = mockStore({ stream: {}, volume: null })

        return store.dispatch(playStream(getStreamsMock[0].id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


});