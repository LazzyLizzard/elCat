import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import queueReducers from 'utils/queue-reducers';
import {FORM_NAMESPACE, ROUTING_NAMESPACE} from 'constants/additional-namespaces';
import {
    ficheModelReducer,
    NAMESPACE as FICHE_NAMESPACE
} from 'pages/fiche/model/reducer';
import {
    groupDetailsReducer
} from 'pages/fiche/group-details/reducer';
import {
    manufsReducer
} from 'pages/fiche/home/redcucer';
import {
    cartReducer,
    NAMESPACE as CART_NAMESPACE
} from 'pages/cart/reducer';
import {
    makeYearReducer
} from 'pages/fiche/make-type/reducer';
import {
    mytReducer
} from 'pages/fiche/make-year-transport/reducer';
import {
    profileReducer,
    NAMESPACE as PROFILE_NAMESPACE
} from 'pages/profile/reducer';
import {
    pickReducer,
    NAMESPACE as PICK_NAMESPACE
} from 'pages/pick/reducer';
import {
    productReducer,
    NAMESPACE as PRODUCT_REDUCER
} from 'pages/product/reducer';

export const rootReducer = combineReducers({
    [FORM_NAMESPACE]: formReducer, // Redux-form reducer should be connected in the application root reducer
    [ROUTING_NAMESPACE]: routerReducer,
    [FICHE_NAMESPACE]: queueReducers(
        ficheModelReducer,
        groupDetailsReducer,
        manufsReducer,
        makeYearReducer,
        mytReducer
    ),
    [CART_NAMESPACE]: cartReducer,
    [PROFILE_NAMESPACE]: profileReducer,
    [PICK_NAMESPACE]: pickReducer,
    [PRODUCT_REDUCER]: productReducer
});
