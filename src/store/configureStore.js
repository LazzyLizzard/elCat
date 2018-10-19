import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {rootReducer} from 'reducers';
import {redirect} from '../middleware/redirect';


// https://redux.js.org/recipes/configuringyourstore
export default function xxx(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
​
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers)
​
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
​
  if (process.env.NODE_ENV !== 'production' && module.hot) {
      module.hot.accept('./reducers', () =>
          store.replaceReducer(rootReducer)
      )
  }
​
  return store
}

export const configureStore = (storeStructure = null) => {
    const middlewares = [thunk, redirect, routerMiddleware(browserHistory)];
    const middlewareEnhancer = applyMiddleware(...middlewares);


    // https://github.com/reactjs/react-router-redux
    const storeX = compose(
        middlewareEnhancer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // if (module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         /* eslint-disable global-require */
    //         const nextRootReducer = require('../reducers');
    //         /* eslint-enable global-require */
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () =>
            store.replaceReducer(rootReducer)
        )
    }

    const store = createStore(rootReducer, storeStructure, storeX)
    return store;
};
