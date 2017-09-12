import {combineReducers} from 'redux';
import {
    // modelDataReducer,
    // это reducer
    reqRed,
    NAMESPACE as FICHE_NAMESPACE
} from '../pages/fiche/reducer';

export const rootReducer = combineReducers({
    [FICHE_NAMESPACE]: reqRed
});
