import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers'; //Your combine reducer file

const middleware = applyMiddleware(reduxThunk);

export default function configureStore() {
    const store = createStore(rootReducer, middleware);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}