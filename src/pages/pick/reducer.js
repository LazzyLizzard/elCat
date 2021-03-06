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

// case with adding/caching results in store
// const rebuildPickResult = (state, payload) => {
//     const newState = {};
//     newState.loader = payload.loader;
//     newState.pickResult = [...state.pickResult, payload.pickResult];
//     newState.selectedPage = payload.page;
//     return Object.assign({}, state, newState);
// };

export const pickReducer = (state = PICK_STATE, action) => {
    switch (action.type) {
        case PICK_REQUEST_START:
        case PICK_REQUEST_SUCCESS:
        case PICK_REQUEST_ERROR:
            return Object.assign({}, state, action.payload);

        case PICK_REQUEST_LIST_START:
        case PICK_REQUEST_LIST_SUCCESS:
        case PICK_REQUEST_LIST_ERROR:
        case PICK_REQUEST_LIST_RESET:
        case PICK_REQUEST_GROUP_ID:
            return Object.assign({}, state, action.payload);

        case PICK_REQUEST_RESULT_START:
        case PICK_REQUEST_RESULT_ERROR:
            return Object.assign({}, state, action.payload);

        case PICK_REQUEST_RESULT_SUCCESS:
            // return rebuildPickResult(state, action.payload);
            return Object.assign({}, state, action.payload);

        case PICK_SET_PAGE_FROM_PAGINATION: {
            return Object.assign({}, state, action.payload);
        }

        default:
            return state;
    }
};
