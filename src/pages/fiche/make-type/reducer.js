import {assign} from 'lodash';
import {STATE_FICHE as initialState} from 'data-srtuctures/fiche';
import {
    YEARS_REQUEST,
    YEARS_SUCCESS,
    YEARS_ERROR
} from './actions';

export function makeYearReducer(state = initialState, action) {
    switch (action.type) {
        case YEARS_REQUEST:
            return assign({}, state, action.payload);

        case YEARS_SUCCESS:
            return assign({}, state, action.payload);

        case YEARS_ERROR:
            return assign({}, state, action.payload);
        default:
            return state;
    }
}
