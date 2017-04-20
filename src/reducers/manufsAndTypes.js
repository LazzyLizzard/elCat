import  * as Actions from '../actions/getManufsAndTypes';

const initialState = {
    manufacturers: null,
    loading: false
};

export default function manufsAndTypes(state = initialState, action) {
    switch (action.type) {

        case Actions.MANUF_AND_TYPES_REQ:
            return Object.assign({}, state, {loading: true});

        case Actions.MANUF_AND_TYPES_SUCC:
            return Object.assign({}, state, {
                loading: false,
                manufacturers: action.payload.manufacturers,
                transportTypesData: action.payload.transportTypesData
            });

        default:
            return state;

    }
}
