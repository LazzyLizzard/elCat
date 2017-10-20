import {assign} from 'lodash';
import {STATE_FICHE as initialState} from 'data-srtuctures/fiche';
import {
    MANUFS_SUCCESS,
    MANUFS_REQUEST,
    MANUFS_ERROR
} from './actions';

export const NAMESPACE = 'fiche';

export function manufsReducer(state = initialState, action) {
    switch (action.type) {
        case MANUFS_REQUEST:
            return assign({}, state, action.payload);

        case MANUFS_SUCCESS:
            return assign({}, state, action.payload);

        case MANUFS_ERROR:
            return assign({}, state, action.payload);

        default:
            return state;
    }
}
