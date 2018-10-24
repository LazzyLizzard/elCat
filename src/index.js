/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {configureStore} from './store/configureStore';
import {Routes} from './routes';
// import storeStructure from './store/storeStructure';
import {rootReducer} from './reducers';

// TODO [sf] 05.09.2017 rewrite completely
const store = createStore(
    rootReducer,
    configureStore()
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router
                history={history}
                routes={Routes}
            />
        </Provider>
    ),
    document.getElementById('root')
);

