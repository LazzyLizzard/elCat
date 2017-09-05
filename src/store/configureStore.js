import {applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
// import {rootReducer} from '../reducers';
import {redirect} from '../middleware/redirect';
// import nextRootReducer from '../reducers';

export default function configureStore() {
    const logger = createLogger();

    // const store = createStore(
    //     rootReducer,
    //     compose(
    //         applyMiddleware(thunk, logger, redirect),
    //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     )
    // );

    const store = compose(
        applyMiddleware(thunk, logger, redirect),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            /* eslint-disable global-require */
            const nextRootReducer = require('../reducers');
            /* eslint-enable global-require */
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
