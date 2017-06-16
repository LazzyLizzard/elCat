import 'whatwg-fetch';

// export const MODEL_INFO = 'MODEL_INFO';
export const MODEL_INFO_REQUEST = 'MODEL_INFO_REQUEST';
export const MODEL_INFO_SUCCESS = 'MODEL_INFO_SUCCESS';

export const modelDataRequest = () => {
	return {
		type: MODEL_INFO_REQUEST
	}
};

export const modelDataSuccess = (data) => {
	return {
		type: MODEL_INFO_SUCCESS,
		payload: data
	}
};

// action generator itself
export const getModelData = (id) => {
	return (dispatch) => {
		dispatch(modelDataRequest());
		return fetch(`model.php?id=${id}`)
			.then(response => response.json())
			.then(modelData => dispatch(modelDataSuccess(modelData)))

	}

};