import {applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
// import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {redirect} from '../middleware/redirect';

export default function configureStore() {
    // const logger = createLogger();

    // const store = createStore(
    //     rootReducer,
    //     compose(
    //         applyMiddleware(thunk, logger, redirect),
    //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     )
    // );

    // https://github.com/reactjs/react-router-redux
    const store = compose(
        applyMiddleware(thunk, redirect, routerMiddleware(browserHistory)),
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
