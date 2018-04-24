import { combineReducers } from 'redux'
import activeStreamReducer from './activeStreamReducer';
import playerReducer from './playerReducer';
import streamsReducer from './streamsReducer';
import volumeReducer from './volumeReducer';
import streamViewReducer from './streamViewReducer';
import metaDataReducer from './metaDataReducer';

export default combineReducers({
    streams: streamsReducer,
    activeStream: activeStreamReducer,
    player: playerReducer,
    volume: volumeReducer,
    streamView: streamViewReducer,
    metaData: metaDataReducer
});