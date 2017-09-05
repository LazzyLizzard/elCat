import {assign} from 'lodash';

export const NAMESPACE = 'fiche';

const initialState = {
    manufacturers: null,
    transportTypes: null,
    years: null,
    modelInfo: null,
    current: {
        modelId: null,
        makeId: null,
        transportTypeId: null,
        year: null
    }
};

export function ficheReducer(state = initialState /* , action */) {
    // TODO [sf] 05.09.2017 add actions
    return assign({}, state);
}
