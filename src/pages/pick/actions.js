import 'whatwg-fetch';
import {find, omit} from 'lodash';
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

export const PICK_REQUEST_RESULT_START = 'PICK/REQUEST_RESULT_START';
export const PICK_REQUEST_RESULT_SUCCESS = 'PICK/REQUEST_RESULT_SUCCESS';
export const PICK_REQUEST_RESULT_ERROR = 'PICK/REQUEST_RESULT_ERROR';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PICK}`;

/**
 * Getting group id by group name
 * @param {string} name
 * @param {array} data Array of objects, list of group names
 * @returns {null | number}
 */
export const getGroupIdByName = (name, data) => {
    const result = find(data, item => item.groupNameTransformed === name);
    return result ? result.id : null;
};

/**
 * Get groups of options by id
 * @param {number} id
 */
export const getOptionsByGroupId = id => (dispatch) => {
    dispatch(requestStart(PICK_REQUEST_LIST_START));
    return fetch(
        `${baseUrl}?async=1&prodGroupId=${id}`, {
            method: 'get'
        })
        .then(response => response.json())
        .then((pickGroupsList) => {
            dispatch(requestSuccess(PICK_REQUEST_LIST_SUCCESS, 'pickListGroups', pickGroupsList));
        })
        .catch(error => dispatch(requestError(PICK_REQUEST_LIST_ERROR, error)));
};

/**
 * Get list of pick groups
 * @param {string} pickGroupName
 */
export const requestPickList = pickGroupName => (dispatch) => {
    dispatch(requestStart(PICK_REQUEST_START));
    return fetch(
        `${baseUrl}?async=1`, {
            method: 'get'
        })
        .then(response => response.json())
        .then((pickGroups) => {
            dispatch(requestSuccess(PICK_REQUEST_SUCCESS, 'pickList', pickGroups));
            return pickGroups;
        })
        .then((pickGroups) => {
            if (pickGroupName) {
                const groupId = getGroupIdByName(pickGroupName, pickGroups);
                // TODO [sf] 26.12.2017 add null check
                dispatch(getOptionsByGroupId(groupId));
            }
        })
        .catch(error => dispatch(requestError(PICK_REQUEST_ERROR, error)));
};

/**
 * Reset group list on unmount
 */
export const resetGroupsList = () => ({
    type: PICK_REQUEST_LIST_RESET,
    payload: {
        pickListGroups: null
    }
});

export const getPickResults = body => (dispatch) => {
    dispatch(requestStart(PICK_REQUEST_RESULT_START));
    fetch(baseUrl, {
        body
    })
        .then(response => response.json())
        .then((json) => {
            const page = json.page;
            const pagination = json.pagination;
            dispatch({
                type: PICK_REQUEST_RESULT_SUCCESS,
                payload: {
                    loader: false,
                    pickResult: {[page]: omit(json, ['page', 'pagination'])},
                    pagination
                }
            });
            return json;
        })
        .catch((error) => {
            dispatch(requestError(PICK_REQUEST_RESULT_ERROR, error));
            return error;
        });
};
