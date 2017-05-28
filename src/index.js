import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './components/Home';
import MakeYear from './components/MakelYear';
import MakeYearTransport from './components/MakeYearTransport';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//import storeStructure from './store/sStruct'
import configureStore from './store/configureStore'
//

//const initialState = () => {
//    return {
//        isLoading: false
//    }
//}
const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Home}>
                <IndexRoute component={App} />
                <Route path='my' component={MakeYear} />
                <Route path='myt' component={MakeYearTransport} />
            </Route>
        </Router>,
    </Provider>,
    document.getElementById('root')
);

