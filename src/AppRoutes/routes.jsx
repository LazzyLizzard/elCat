import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from '../containers/app';
import {Home} from '../components/Home/home';
import {MakeYear} from '../pages/fiche/make-year/make-year';
import {MakeType} from '../pages/fiche/make-type/make-type';
import {MakeYearTransport} from '../pages/fiche/make-year-transport/make-year-transport';
// TODO разобраться с export default в Model
import {Model} from '../pages/fiche/model';
import {NotFound} from '../components/not-found/not-found';

export default (
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
