import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import queueReducers from 'utils/queue-reducers';
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

export const rootReducer = combineReducers({
    form: formReducer, // Redux-form reducer should be connected in the application root reducer
    [FICHE_NAMESPACE]: queueReducers(
        ficheModelReducer,
        groupDetailsReducer,
        manufsReducer,
        makeYearReducer,
        mytReducer
    ),
    [CART_NAMESPACE]: cartReducer,
    [PROFILE_NAMESPACE]: profileReducer,
    [PICK_NAMESPACE]: pickReducer

});
