import 'whatwg-fetch';
import {getRequestEnvironment} from './../../../utils/get-request-environment';
import {REMOTE_HTTPS} from '../../../contants/server-request-environment';
import {ENDPOINT_FICHE} from './../../../contants/end-points';

export const YEARS_REQUEST = 'YEARS_REQUEST';
export const YEARS_SUCCESS = 'YEARS_SUCCESS';
export const YEARS_ERROR = 'YEARS_ERROR';

export const yearsDataRequest = () => ({
    type: YEARS_REQUEST,
    payload: {
        loader: true
    }
});

export const yearsDataSuccess = data => ({
    type: YEARS_SUCCESS,
    payload: {
        loader: false,
        years: data
    }
});

export const yearDataError = error => ({
    type: YEARS_ERROR,
    payload: {
        loader: false,
        error
    }
});

export const requestYearsData = (manufId, transportTypeId) => (
    (dispatch) => {
        const url = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_FICHE}`;
        dispatch(yearsDataRequest());
        return fetch(`${url}?async=1&action=getYearsByManufAndType&manufId=${manufId}&tTypeId=${transportTypeId}`, {
            method: 'get'
            // mode: 'no-cors'
        })
            .then(response => response.json())
            .then(yearsData => dispatch(yearsDataSuccess(yearsData)))
            .catch(error => dispatch(yearDataError(error)));
    }
);
