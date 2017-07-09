import 'whatwg-fetch';
import {REQUEST_URL_FICHE} from '../../routes/constants'

// export const MODEL_INFO = 'MODEL_INFO';
export const MODEL_INFO_REQUEST = 'MODEL_INFO_REQUEST';
export const MODEL_INFO_SUCCESS = 'MODEL_INFO_SUCCESS';

export const modelDataRequest = () => {
	return {
		type: MODEL_INFO_REQUEST,
		payload: {
			loader: true
		}
	}
};

export const modelDataSuccess = (data) => {
	return {
		type: MODEL_INFO_SUCCESS,
		payload: {
			loader: false,
			modelData: data
		}
	}
};

// action generator itself
export function getModelData(id) {
	console.log('id %s', id);
	return (dispatch) => {
		dispatch(modelDataRequest());
		return fetch(
			`${REQUEST_URL_FICHE}?async=1&action=model&modelId=${id}`, {
				method: 'get',
				mode: 'cors'
			})
			.then(response => response.json())
			.then(modelData => dispatch(modelDataSuccess(modelData)))
	}
}