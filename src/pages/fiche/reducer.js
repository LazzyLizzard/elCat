import {combineReducers} from 'redux';
import {ficheModelReducer} from './model/reducer';
import {groupDetailsReducer} from './group-details/reducer';

export const ficheReducers = combineReducers({a: ficheModelReducer, b: groupDetailsReducer});
