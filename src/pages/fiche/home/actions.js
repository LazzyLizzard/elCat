import 'whatwg-fetch';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'constants/server-request-environment';
import {ENDPOINT_FICHE} from 'constants/end-points';

// export const MODEL_INFO = 'MODEL_INFO';
export const MANUFS_REQUEST = 'MANUFS_REQUEST';
export const MANUFS_SUCCESS = 'MANUFS_SUCCESS';
export const MANUFS_ERROR = 'MANUFS_ERROR';
export const HOME_VIEW_MODE = 'HOME_VIEW_MODE';

export const manufsRequest = () => ({
    type: MANUFS_REQUEST,
    payload: {
        loader: true
    }
});

export const manufsReueqdSuccess = data => ({
    type: MANUFS_SUCCESS,
    payload: {
        loader: false,
        manufacturers: data
    }
});

export const manufsError = error => ({
    type: MANUFS_ERROR,
    payload: {
        loader: false,
        error
    }
});

export const setHomeViewMode = mode => ({
    type: HOME_VIEW_MODE,
    payload: {
        homeViewMode: mode
    }
});

// action generator itself
export const requestManufacturers = () => (
    (dispatch) => {
        const url = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_FICHE}`;
        dispatch(manufsRequest());
        return fetch(
            `${url}?async=1&action=getManufsAndTransport`, {
                method: 'get'
            }
        )
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return response.json();
            })
            .then(modelData => dispatch(manufsReueqdSuccess(modelData)))
            .catch(error => dispatch(manufsError(error)));
    }
);

