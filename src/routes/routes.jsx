import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/app';
import Home from '../components/Home';
import MakeYear from './../components/MakelYear';
import MakeType from '../pages/fiche/make-type/make-type';
import MakeYearTransport from './../components/MakeYearTransport';
import Model from './../components/Model';
import NotFound from './../components/not-found';

export default function RoutesList() {
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
