import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store/configureStore'
import { routes } from './routes/index'

import storeStructure from './store/storeStructure'
import {rootReducer} from './reducers'

//

//const initialState = () => {
//    return {
//        isLoading: false
//    }
//}
const store = createStore(rootReducer, configureStore(storeStructure));

render(
	<Provider store={store} >
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);

