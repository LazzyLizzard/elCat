import {assign} from 'lodash';

import {GROUP_INFO_REQUEST, GROUP_INFO_ERROR, GROUP_INFO_SUCCESS} from './actions';

const initialState = {
    gr: 1
};

export function groupDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case GROUP_INFO_REQUEST:
            return assign({}, state, action.payload);

        case GROUP_INFO_SUCCESS:
            return assign({}, state, action.payload);

        case GROUP_INFO_ERROR:
            return assign({}, state, action.payload);

        default:
            return state;
    }
}
