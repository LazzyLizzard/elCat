import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from 'containers';
import {Home} from 'components/Home';
import {FicheHome} from 'pages/fiche/home';
import {MakeType} from 'pages/fiche/make-type';
import {MakeYear} from 'pages/fiche/make-year';
import {MakeYearTransport} from 'pages/fiche/make-year-transport';
import {Model} from 'pages/fiche/model';
import {GroupDetails} from 'pages/fiche/group-details';
import {NotFound} from 'components/not-found';
import {Cart} from 'pages/cart';
import {Profile} from 'pages/profile';
import {Pick} from 'pages/pick';
import {NAMESPACE as FICHE_NAMESPACE} from 'pages/fiche/model/reducer';
import {NAMESPACE as CART_NAMESPACE} from 'pages/cart/reducer';
import {NAMESPACE as PROFILE_NAMESPACE} from 'pages/profile/reducer';
import {NAMESPACE as PICK_NAMESPACE} from 'pages/pick/reducer';

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
            <Route path={`/${FICHE_NAMESPACE}/model/:modelId/group/:groupId`} component={GroupDetails} />

            {/* cart */}
            <Route path={`/${CART_NAMESPACE}`} component={Cart} />

            {/* profile, customer */}
            <Route path={`/${PROFILE_NAMESPACE}`} component={Profile} />
            <Route path={`/${PROFILE_NAMESPACE}/orders`} component={Profile} />

            {/* selector */}
            <Route path={`/${PICK_NAMESPACE}`} component={Pick} />
            <Route path={`/${PICK_NAMESPACE}/:pickGroupName`} component={Pick} />

            <Route path="*" component={NotFound} />

        </Route>

    </div>
);
