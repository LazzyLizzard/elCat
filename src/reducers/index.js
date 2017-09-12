import {combineReducers} from 'redux';
import {
    modelDataReducer,
    NAMESPACE as FICHE_NAMESPACE
} from '../pages/fiche/reducer';

export const rootReducer = combineReducers({
    [FICHE_NAMESPACE]: modelDataReducer
});
