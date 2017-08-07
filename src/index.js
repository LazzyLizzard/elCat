/* eslint-disable react/jsx-filename-extension */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import configureStore from './store/configureStore';
// import AppRoutes from './AppRoutes/index';

import storeStructure from './store/storeStructure';
import {rootReducer} from './reducers';

import App from './containers/App';
import Home from './components/Home';
import MakeYear from './components/MakelYear';
import MakeType from './components/MakeType';
import MakeYearTransport from './components/MakeYearTransport';
import Model from './components/Model';
import NotFound from './components/not-found';

//

// const initialState = () => {
//    return {
//        isLoading: false
//    }
// }

function AppRoutes() {
    return (
        <div>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/mt/:make/:typeId" component={MakeType} />
                <Route path="/my/:make/:year" component={MakeYear} />
                <Route
                    path="/myt/:make/:year/:transport"
                    component={MakeYearTransport}
                />
                <Route path="/model/:modelId" component={Model} />
            </Route>
            <Route path="*" component={NotFound} />
        </div>
    );
}

const store = createStore(rootReducer, configureStore(storeStructure));

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={AppRoutes} />
    </Provider>,
    document.getElementById('root')
);

