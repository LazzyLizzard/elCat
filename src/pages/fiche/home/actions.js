import 'whatwg-fetch';
import {REQUEST_URL_FICHE} from './../../../AppRoutes/constants';

// export const MODEL_INFO = 'MODEL_INFO';
export const MANUFS_REQUEST = 'MANUFS_REQUEST';
export const MANUFS_SUCCESS = 'MANUFS_SUCCESS';
export const MANUFS_ERROR = 'MANUFS_ERROR';

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


// action generator itself
export const requestManufacturers = () => (
    (dispatch) => {
        dispatch(manufsRequest());
        return fetch(
            `${REQUEST_URL_FICHE}?async=1&action=getManufList`, {
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
            .then(modelData => dispatch(manufsReueqdSuccess(modelData)))
            .catch(error => dispatch(manufsError(error)));
    }
);

