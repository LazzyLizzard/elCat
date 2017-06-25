import {applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {redirect} from '../middleware/redirect'

export default function configureStore() {

    const logger = createLogger();

    // console.log(storeStructure);

    const store = compose(
        applyMiddleware(thunk, logger, redirect),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    console.log('123123', store);
    return store
}