import 'whatwg-fetch';
import {REQUEST_URL_FICHE} from './../../../AppRoutes/constants';

// export const MODEL_INFO = 'MODEL_INFO';
export const MODEL_INFO_REQUEST = 'MODEL_INFO_REQUEST';
export const MODEL_INFO_SUCCESS = 'MODEL_INFO_SUCCESS';
export const MODEL_INFO_ERROR = 'MODEL_INFO_ERROR';

export const modelDataRequest = () => {
    console.log('reducer mdr');
    return ({
        type: MODEL_INFO_REQUEST,
        payload: {
            loader: true
        }
    });
};

export const modelDataSuccess = data => ({
    type: MODEL_INFO_SUCCESS,
    payload: {
        loader: false,
        modelData: data
    }
});

export const modelDataError = error => ({
    type: MODEL_INFO_ERROR,
    payload: {
        loader: false,
        error
    }
});

// action generator itself
export const reqModel = id => (
    (dispatch) => {
        dispatch(modelDataRequest());
        return fetch(
            `${REQUEST_URL_FICHE}?async=1&action=model&modelId=${id}`, {
                method: 'get',
                mode: 'cors'
            })
            .then((response) => {
                // TODO [sf] 28.09.2017 check what's in response
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(modelData => dispatch(modelDataSuccess(modelData)))
            .catch(error => dispatch(modelDataError(error)));
    }
);
