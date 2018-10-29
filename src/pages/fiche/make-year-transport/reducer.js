import {assign} from 'lodash';
import {STATE_FICHE as initialState} from 'data-srtuctures/fiche';
import {
    MTY_REQUEST,
    MTY_SUCCESS,
    MTY_ERROR
} from './actions';

export function mytReducer(state = initialState, action) {
    switch (action.type) {
        case MTY_REQUEST:
            return assign({}, state, action.payload);

        case MTY_SUCCESS:
            return assign({}, state, action.payload);

        case MTY_ERROR:
            return assign({}, state, action.payload);

        default:
            return state;
    }
}
