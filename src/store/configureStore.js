import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { redirect } from '../middleware/redirect'

export default function configureStore(initialState) {

    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, logger, redirect),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )(createStore)(rootReducer)
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}