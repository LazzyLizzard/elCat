import {applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {redirect} from '../middleware/redirect';

export default function configureStore() {
    const logger = createLogger();

    // console.log(storeStructure);

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
