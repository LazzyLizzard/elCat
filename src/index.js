import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './containers/App'
import Home from './components/Home';
import MakeYear from './components/MakelYear';
import MakeYearTransport from './components/MakeYearTransport';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//import storeStructure from './store/sStruct'
import configureStore from './store/configureStore'
import { routes } from './routes'

import storeStructure from './store/storeStructure'

//

//const initialState = () => {
//    return {
//        isLoading: false
//    }
//}
const store = configureStore(storeStructure);

render(
	<Provider store={store} >
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);

