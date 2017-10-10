import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from '../containers';
import {Home} from '../components/Home';
import {FicheHome} from '../pages/fiche/home';
import {MakeYear} from '../pages/fiche/make-year';
import {MakeType} from '../pages/fiche/make-type';
import {MakeYearTransport} from '../pages/fiche/make-year-transport';
import {Model} from '../pages/fiche/model';
import {GroupDetails} from '../pages/fiche/group-details';
import {NotFound} from '../components/not-found/not-found';
import {Cart} from '../pages/cart';
import {NAMESPACE as FICHE_NAMESPACE} from '../pages/fiche/model/reducer';
import {NAMESPACE as CART_NAMESPACE} from '../pages/cart/reducer';

export default (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            {/* fiche - elcat */}
            <Route path={`/${FICHE_NAMESPACE}`} component={FicheHome} />
            <Route path={`/${FICHE_NAMESPACE}/mt/:make/:typeId`} component={MakeType} />
            <Route path={`/${FICHE_NAMESPACE}/my/:make/:year`} component={MakeYear} />
            <Route
                path={`/${FICHE_NAMESPACE}/mty/:make/:transport/:year`}
                component={MakeYearTransport}
            />
            <Route path={`/${FICHE_NAMESPACE}/model/:modelId`} component={Model} />
            <Route path={`/${FICHE_NAMESPACE}/group/:groupId`} component={GroupDetails} />

            {/* cart */}
            <Route path={`/${CART_NAMESPACE}`} component={Cart} />
        </Route>
        <Route path="*" component={NotFound} />
    </div>
);
