import {assign} from 'lodash';
import {
    PICK_REQUEST_START,
    PICK_REQUEST_SUCCESS,
    PICK_REQUEST_ERROR
} from './actions';

export const NAMESPACE = 'pick';

export const pickReducer = (state = {}, action) => {
    switch (action.type) {
        case PICK_REQUEST_START:
        case PICK_REQUEST_SUCCESS:
        case PICK_REQUEST_ERROR:
            return assign({}, state, action.payload);

        default:
            return state;
    }
};
