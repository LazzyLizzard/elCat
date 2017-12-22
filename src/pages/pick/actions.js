import 'whatwg-fetch';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'contants/server-request-environment';
import {ENDPOINT_PICK} from 'contants/end-points';
import {requestStart, requestError, requestSuccess} from 'utils/request-steps';

export const PICK_REQUEST_START = 'PICK/REQUEST_START';
export const PICK_REQUEST_SUCCESS = 'PICK/REQUEST_SUCCESS';
export const PICK_REQUEST_ERROR = 'PICK/REQUEST_ERROR';

export const PICK_REQUEST_LIST_START = 'PICK/REQUEST_LIST_START';
export const PICK_REQUEST_LIST_SUCCESS = 'PICK/REQUEST_LIST_SUCCESS';
export const PICK_REQUEST_LIST_ERROR = 'PICK/REQUEST_LIST_ERROR';
export const PICK_REQUEST_LIST_RESET = 'PICK/REQUEST_LIST_RESET';


const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PICK}`;

// action generator itself
export const requestPickList = () => (
    (dispatch) => {
        dispatch(requestStart(PICK_REQUEST_START));
        return fetch(
            `${baseUrl}?async=1`, {
                method: 'get'
            })
            .then(response => response.json())
            .then(pickGroups => dispatch(requestSuccess(PICK_REQUEST_SUCCESS, 'pickList', pickGroups)))
            .catch(error => dispatch(requestError(PICK_REQUEST_ERROR, error)));
    }
);


export const getOptionsByGroupId = id => (
    (dispatch) => {
        dispatch(requestStart(PICK_REQUEST_LIST_START));
        return fetch(
            `${baseUrl}?async=1&prodGroupId=${id}`, {
                method: 'get'
            })
            .then(response => response.json())
            .then(pickGroupsList => dispatch(requestSuccess(PICK_REQUEST_LIST_SUCCESS, 'pickListGroups', pickGroupsList)))
            .catch(error => dispatch(requestError(PICK_REQUEST_LIST_ERROR, error)));
    }
);

// TODO move payload to const
export const resetGroupsList = () => ({
    type: PICK_REQUEST_LIST_RESET,
    payload: {
        pickListGroups: null
    }
});
