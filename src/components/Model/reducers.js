import {MODEL_INFO_REQUEST, MODEL_INFO_SUCCESS} from './actions';

const initialState = {
	modelData: null,
	loading: false
};

export default function modelDataReducer(state = initialState, action) {
	switch (action.type) {

		case MODEL_INFO_REQUEST:
			return Object.assign({}, state, {
				loading: true
			});

		case MODEL_INFO_SUCCESS:
			return Object.assign({}, state, {
				loading: false
				// manufacturers: action.payload.manufacturers,
				// transportTypesData: action.payload.transportTypesData
			});

        default:
            return state;
	}
}
