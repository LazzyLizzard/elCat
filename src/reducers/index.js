import {combineReducers} from 'redux';
import {
    NAMESPACE as FICHE_NAMESPACE
} from '../pages/fiche/model/reducer';
import {
    cartReducer,
    NAMESPACE as CART_NAMESPACE
} from '../pages/cart/reducer';

import {ficheReducers} from '../pages/fiche/reducer';

export const rootReducer = combineReducers({
    [FICHE_NAMESPACE]: ficheReducers,
    [CART_NAMESPACE]: cartReducer
});
