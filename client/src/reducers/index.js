import { combineReducers } from 'redux'
import activeStreamReducer from './activeStreamReducer';
import playerReducer from './playerReducer';
import streamsReducer from './streamsReducer';
import volumeReducer from './volumeReducer';

export default combineReducers({
    streams: streamsReducer,
    activeStream: activeStreamReducer,
    player: playerReducer,
    volume: volumeReducer
});