import {combineReducers} from 'redux';
import {
    ficheReducer,
    NAMESPACE as FICHE_NAMESPACE
} from '../pages/fiche/reducer';
import {
    cartReducer,
    NAMESPACE as CART_NAMESPACE
} from '../pages/cart/reducer';

export const rootReducer = combineReducers({
    [FICHE_NAMESPACE]: ficheReducer,
    [CART_NAMESPACE]: cartReducer
});
