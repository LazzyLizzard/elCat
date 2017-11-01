import {combineReducers} from 'redux';
import queueReducers from 'utils/queue-reducers';
import {selectorFormReducer} from 'pages/selector/selectror-form-reducer';
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
} from '../pages/profile/reducer';

export const rootReducer = combineReducers({
    [FICHE_NAMESPACE]: queueReducers(
        ficheModelReducer,
        groupDetailsReducer,
        manufsReducer,
        makeYearReducer,
        mytReducer
    ),
    [CART_NAMESPACE]: cartReducer,
    [PROFILE_NAMESPACE]: profileReducer,
    form: selectorFormReducer
});
