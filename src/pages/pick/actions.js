import 'whatwg-fetch';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'contants/server-request-environment';
import {ENDPOINT_PICK} from 'contants/end-points';
import {requestStart, requestError, requestSuccess} from 'utils/request-steps';

export const PICK_REQUEST_START = 'PICK/REQUEST_START';
export const PICK_REQUEST_SUCCESS = 'PICK/REQUEST_SUCCESS';
export const PICK_REQUEST_ERROR = 'PICK/REQUEST_ERROR';

// action generator itself
export const requestPickList = () => (
    (dispatch) => {
        const url = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PICK}`;
        dispatch(requestStart(PICK_REQUEST_START));
        return fetch(
            `${url}?async=1`, {
                method: 'get'
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return response.json();
            })
            .then(modelData => dispatch(requestSuccess(PICK_REQUEST_SUCCESS, 'pickList', modelData)))
            .catch(error => dispatch(requestError(PICK_REQUEST_ERROR, error)));
    }
);
