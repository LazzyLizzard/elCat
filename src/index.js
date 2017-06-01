import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './components/Home';
import MakeYear from './components/MakelYear';
import MakeYearTransport from './components/MakeYearTransport';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//import storeStructure from './store/sStruct'
import configureStore from './store/configureStore'
import { routes } from './routes'

//import storeStructure from './store/sStruct'

//

//const initialState = () => {
//    return {
//        isLoading: false
//    }
//}
const store = configureStore();

render(
    <Provider store={store} >
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

