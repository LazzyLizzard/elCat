import {assign} from 'lodash';
import {
    MODEL_INFO_REQUEST,
    MODEL_INFO_SUCCESS,
    MODEL_INFO_ERROR
} from './actions';

export const NAMESPACE = 'fiche';

const initialState = {
    // modelInfo: null,
    manufacturers: null,
    transportTypes: null,
    years: null,
    error: null,
    loader: false,
    current: {
        modelId: null,
        makeId: null,
        transportTypeId: null,
        year: null
    }
};

export function ficheModelReducer(state = initialState, action) {
    switch (action.type) {
        case MODEL_INFO_REQUEST:
            return assign({}, state, action.payload);

        case MODEL_INFO_SUCCESS:
            return assign({}, state, action.payload);

        case MODEL_INFO_ERROR:
            return assign({}, state, action.payload);

        default:
            return state;
    }
}
