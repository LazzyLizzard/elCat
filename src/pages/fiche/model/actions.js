import 'whatwg-fetch';
import {getRequestEnvironment} from './../../../utils/get-request-environment';
import {REMOTE_HTTPS} from '../../../contants/server-request-environment';
import {ENDPOINT_FICHE} from './../../../contants/end-points';

// export const MODEL_INFO = 'MODEL_INFO';
export const MODEL_INFO_REQUEST = 'MODEL_INFO_REQUEST';
export const MODEL_INFO_SUCCESS = 'MODEL_INFO_SUCCESS';
export const MODEL_INFO_ERROR = 'MODEL_INFO_ERROR';

export const modelDataRequest = () => ({
    type: MODEL_INFO_REQUEST,
    payload: {
        loader: true
    }
});

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
export const requestModelData = id => (
    (dispatch) => {
        const url = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_FICHE}`;
        dispatch(modelDataRequest());
        return fetch(
            `${url}?async=1&action=model&modelId=${id}`, {
                method: 'get'
                // mode: 'no-cors'
            })
            .then((response) => {
                console.warn(response);
                if (response.status === 200) {
                    return response.json();
                }
                return response.json();
            })
            .then(modelData => dispatch(modelDataSuccess(modelData)))
            .catch(error => dispatch(modelDataError(error)));
    }
);
