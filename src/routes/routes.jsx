import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './../containers/App';
import Home from '../components/Home/home';
import MakeYear from './../components/MakelYear';
import MakeType from './../components/MakeType';
import MakeYearTransport from './../components/MakeYearTransport';
import Model from './../components/Model';
import NotFound from './../components/NotFound';

const Routes = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/mt/:make/:typeId" component={MakeType} />
            <Route path="/my/:make/:year" component={MakeYear} />
            npm install --save eslint-config-airbnb
            <Route
                path="/myt/:make/:year/:transport"
                component={MakeYearTransport}
            />
            <Route path="/model/:modelId" component={Model} />
        </Route>
        <Route path="*" component={NotFound} />
    </div>
);

export default Routes;
