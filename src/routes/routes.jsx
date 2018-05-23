import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from 'containers';
import {Home} from 'components/Home';
import {NotFound} from 'pages/not-found';
import {
    FicheHome,
    MakeType,
    Model,
    MakeYearTransport,
    MakeYear,
    GroupDetails
} from 'pages/fiche';
import {Cart} from 'pages/cart';
import {Profile} from 'pages/profile';
import {PickHome, PickList} from 'pages/pick';
import {Product} from 'pages/product';
import {NAMESPACE as FICHE_NAMESPACE} from 'pages/fiche/model/reducer';
import {NAMESPACE as CART_NAMESPACE} from 'pages/cart/reducer';
import {NAMESPACE as PROFILE_NAMESPACE} from 'pages/profile/reducer';
import {NAMESPACE as PICK_NAMESPACE} from 'pages/pick/reducer';
import {NAMESPACE as PRODUCT_NAMESPACE} from 'pages/product/reducer';


export const Routes = (
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

        {/* pick */}
        <Route path={`/${PICK_NAMESPACE}`} component={PickHome} />
        <Route path={`/${PICK_NAMESPACE}/:pickGroupName`} component={PickList} />

        <Route path={`/${PRODUCT_NAMESPACE}/:productUrl`} component={Product} />

        <Route path="*" component={NotFound} />
    </Route>
);
