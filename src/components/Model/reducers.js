import {combineReducers} from 'redux';
import * as modelAction from './actions';

const initialState = {
	modelData: null,
	loading: false
};

export default function modelDataReducer(state = initialState, action) {

	switch (action.type) {

		case modelAction.MODEL_INFO_REQUEST:
			return Object.assign({}, state, {
				loading: true
			});

		case modelAction.MODEL_INFO_SUCCESS:
			return Object.assign({}, state, {
				loading: false
				// manufacturers: action.payload.manufacturers,
				// transportTypesData: action.payload.transportTypesData
			});
	}
}

const rootReducer = combineReducers({
	modelDataReducer
});

export default rootReducer;