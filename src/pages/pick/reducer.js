import {assign} from 'lodash';
import {
    PICK_REQUEST_START,
    PICK_REQUEST_SUCCESS,
    PICK_REQUEST_ERROR,
    PICK_REQUEST_LIST_START,
    PICK_REQUEST_LIST_SUCCESS,
    PICK_REQUEST_LIST_ERROR,
    PICK_REQUEST_LIST_RESET
} from './actions';

export const NAMESPACE = 'pick';

const initialState = {
    pickList: null,
    pickListGroups: null
};

export const pickReducer = (state = initialState, action) => {
    switch (action.type) {
        case PICK_REQUEST_START:
        case PICK_REQUEST_SUCCESS:
        case PICK_REQUEST_ERROR:
            return assign({}, state, action.payload);

        case PICK_REQUEST_LIST_START:
        case PICK_REQUEST_LIST_SUCCESS:
        case PICK_REQUEST_LIST_ERROR:
        case PICK_REQUEST_LIST_RESET:
            return assign({}, state, action.payload);

        default:
            return state;
    }
};
