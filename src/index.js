/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import {Routes} from './routes';

// TODO [sf] 05.09.2017 rewrite completely
const store = configureStore();

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

