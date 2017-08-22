/* eslint-disable react/jsx-filename-extension */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
// import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import configureStore from './store/configureStore';
import AppRoutes from './AppRoutes/routes';

import storeStructure from './store/storeStructure';
import {rootReducer} from './reducers';

// import {App} from './containers/app';
// import Home from './components/Home';
// import {MakeYear} from './pages/fiche/make-year/make-year';
// import {MakeType} from './pages/fiche/make-type/make-type';
// import {MakeYearTransport} from './pages/fiche/make-year-transport/make-year-transport';
// import {Model} from './pages/fiche/model/model';
// import NotFound from './components/not-found';

//

// const initialState = () => {
//    return {
//        isLoading: false
//    }
// }

// function AppRoutes() {
//     return (
//         <div>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Home} />
//                 <Route path="/mt/:make/:typeId" component={MakeType} />
//                 <Route path="/my/:make/:year" component={MakeYear} />
//                 <Route
//                     path="/myt/:make/:year/:transport"
//                     component={MakeYearTransport}
//                 />
//                 <Route path="/model/:modelId" component={Model} />
//             </Route>
//             <Route path="*" component={NotFound} />
//         </div>
//     );
// }

const store = createStore(rootReducer, configureStore(storeStructure));

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={AppRoutes} />
    </Provider>,
    document.getElementById('root')
);
