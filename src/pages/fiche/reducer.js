import {combineReducers} from 'redux';
import {assign} from 'lodash';
import {ficheModelReducer} from './model/reducer';
import {groupDaetailsReducer} from './group-details/reducer';

export const ficheReducers = combineReducers(assign({}, ficheModelReducer, groupDaetailsReducer));
