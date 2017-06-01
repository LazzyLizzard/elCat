import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
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

