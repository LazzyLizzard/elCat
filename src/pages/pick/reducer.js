import {assign} from 'lodash';
import {PICK_STATE} from 'data-srtuctures/pick';
import {
    PICK_REQUEST_START,
    PICK_REQUEST_SUCCESS,
    PICK_REQUEST_ERROR,
    PICK_REQUEST_LIST_START,
    PICK_REQUEST_LIST_SUCCESS,
    PICK_REQUEST_LIST_ERROR,
    PICK_REQUEST_LIST_RESET,
    PICK_REQUEST_RESULT_START,
    PICK_REQUEST_RESULT_SUCCESS,
    PICK_REQUEST_RESULT_ERROR,
    PICK_REQUEST_GROUP_ID,
    PICK_SET_PAGE_FROM_PAGINATION
} from './actions';

export const NAMESPACE = 'pick';

export const pickReducer = (state = PICK_STATE, action) => {
    switch (action.type) {
        case PICK_REQUEST_START:
        case PICK_REQUEST_SUCCESS:
        case PICK_REQUEST_ERROR:
            return assign({}, state, action.payload);

        case PICK_REQUEST_LIST_START:
        case PICK_REQUEST_LIST_SUCCESS:
        case PICK_REQUEST_LIST_ERROR:
        case PICK_REQUEST_LIST_RESET:
        case PICK_REQUEST_GROUP_ID:
            return assign({}, state, action.payload);

        case PICK_REQUEST_RESULT_START:
        case PICK_REQUEST_RESULT_ERROR:
            return assign({}, state, action.payload);

        case PICK_REQUEST_RESULT_SUCCESS:
            // TODO [sf] 17.05.2018 check if pages data is stored properly
            // (all pages data present in store pick.pickResult)
            return assign({}, state, action.payload);

        case PICK_SET_PAGE_FROM_PAGINATION: {
            return assign({}, state, action.payload);
        }

        default:
            return state;
    }
};
