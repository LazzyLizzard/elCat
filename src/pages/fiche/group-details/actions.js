import 'whatwg-fetch';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'constants/server-request-environment';
import {ENDPOINT_FICHE} from 'constants/end-points';


export const GROUP_INFO_REQUEST = 'GROUP_INFO_REQUEST';
export const GROUP_INFO_SUCCESS = 'GROUP_INFO_SUCCESS';
export const GROUP_INFO_ERROR = 'GROUP_INFO_ERROR';

export const groupDataRequest = () => ({
    type: GROUP_INFO_REQUEST,
    payload: {
        loader: true
    }
});

export const groupDataSuccess = data => ({
    type: GROUP_INFO_SUCCESS,
    payload: {
        loader: false,
        groupData: data
    }
});

export const groupDataError = error => ({
    type: GROUP_INFO_ERROR,
    payload: {
        loader: false,
        error
    }
});

export const requestGroupInfo = id => (
    (dispatch) => {
        dispatch(groupDataRequest());
        const url = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_FICHE}`;
        return fetch(
            `${url}?async=1&action=modelGroup&groupId=${id}`, {
                method: 'get'
                // mode: 'cors'
            }
        )
            .then(response => response.json())
            .then(modelData => dispatch(groupDataSuccess(modelData)))
            .catch(error => dispatch(groupDataError(error)));
    }
);
