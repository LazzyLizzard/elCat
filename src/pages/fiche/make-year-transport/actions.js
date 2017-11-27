import 'whatwg-fetch';
import {getRequestEnvironment} from './../../../utils/get-request-environment';
import {REMOTE_HTTPS} from '../../../contants/server-request-environment';
import {ENDPOINT_FICHE} from './../../../contants/end-points';

export const MTY_REQUEST = 'MTY_REQUEST';
export const MTY_SUCCESS = 'MTY_SUCCESS';
export const MTY_ERROR = 'MTY_ERROR';

export const mtyDataRequest = () => ({
    type: MTY_REQUEST,
    payload: {
        loader: true
    }
});

export const mtyDataSuccess = data => ({
    type: MTY_SUCCESS,
    payload: {
        loader: false,
        modelsList: data
    }
});

export const mtyDataError = error => ({
    type: MTY_ERROR,
    payload: {
        loader: false,
        error
    }
});

// action generator itself
export const mtyModelData = (make, type, year) => (
    (dispatch) => {
        const url = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_FICHE}`;
        dispatch(mtyDataRequest());
        return fetch(
            `${url}?async=1&action=getModelsByAllParams&manufId=${make}&tTypeId=${type}&year=${year}`, {
                method: 'get'
                // mode: 'no-cors'
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return response.json();
            })
            .then(modelData => dispatch(mtyDataSuccess(modelData)))
            .catch(error => dispatch(mtyDataError(error)));
    }
);
//
// function x(method, resource, args) {
//
// }
