import {combineReducers} from 'redux';
import {
    ficheReducer,
    NAMESPACE as FICHE_NAMESPACE
} from '../pages/fiche/reducer';

export const rootReducer = combineReducers({
    [FICHE_NAMESPACE]: ficheReducer
});
