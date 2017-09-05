import {MODEL_INFO_REQUEST, MODEL_INFO_SUCCESS} from './actions';

const initialState = {
    modelId: null,
    modelData: null,
    loading: false
};

export function modelDataReducer(state = initialState, action) {
    switch (action.type) {
        case MODEL_INFO_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });

        case MODEL_INFO_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                modelData: action.payload.modelData
            });

        default:
            return state;
    }
}
