/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {configureStore} from './store/configureStore';
import {Routes} from './routes';
import storeStructure from './store/storeStructure';
// import {rootReducer} from './reducers';

// TODO [sf] 05.09.2017 rewrite completely
const store = createStore(
    rootReducer,
    configureStore(storeStructure)
);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router
            history={history}
            routes={Routes}
        />
    </Provider>,
    document.getElementById('root')
);

