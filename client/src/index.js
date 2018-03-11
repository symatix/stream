import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MuiThemeProvider } from 'material-ui/styles';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
// import initStore from './init/store';
import theme from './theme';

import './index.css';

import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
