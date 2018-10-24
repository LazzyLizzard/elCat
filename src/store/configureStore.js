import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {rootReducer} from 'reducers';
import {redirect} from '../middleware/redirect';

export const configureStore = () => {
    const middlewares = [
        thunk,
        redirect,
        routerMiddleware(browserHistory)
    ];
    const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        composedEnhancers(
            applyMiddleware(...middlewares)
        )
    );

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./../reducers', () => store.replaceReducer(rootReducer));
    }
    return store;
};
