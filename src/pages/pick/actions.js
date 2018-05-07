import 'whatwg-fetch';
import {find} from 'lodash';
import {push} from 'react-router-redux';
import {stringify} from 'query-string';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'constants/server-request-environment';
import {ENDPOINT_PICK} from 'constants/end-points';
import {filterValuesStringify, simpleFilterStringify} from 'utils/pick-from-utils';
import {requestStart, requestError, requestSuccess} from 'utils/request-steps';
import {
    PICK_FORM_PAGE,
    PICK_FORM_GROUP_ID,
    PICK_FORM_FILTERS,
    PICK_FORM_MANUFACTURERS
} from './field-names';

export const PICK_REQUEST_START = 'PICK/REQUEST_START';
export const PICK_REQUEST_SUCCESS = 'PICK/REQUEST_SUCCESS';
export const PICK_REQUEST_ERROR = 'PICK/REQUEST_ERROR';

export const PICK_REQUEST_LIST_START = 'PICK/REQUEST_LIST_START';
export const PICK_REQUEST_LIST_SUCCESS = 'PICK/REQUEST_LIST_SUCCESS';
export const PICK_REQUEST_LIST_ERROR = 'PICK/REQUEST_LIST_ERROR';
export const PICK_REQUEST_LIST_RESET = 'PICK/REQUEST_LIST_RESET';
export const PICK_REQUEST_GROUP_ID = 'PICK/REQUEST_GROUP_ID';

export const PICK_REQUEST_RESULT_START = 'PICK/REQUEST_RESULT_START';
export const PICK_REQUEST_RESULT_SUCCESS = 'PICK/REQUEST_RESULT_SUCCESS';
export const PICK_REQUEST_RESULT_ERROR = 'PICK/REQUEST_RESULT_ERROR';

export const PICK_SET_PAGE_FROM_PAGINATION = 'PICK/SET_PAGE_FROM_PAGINATION';

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
 * Get groups of options by group id
 * @param {number} pickGroupId
 */
export const getOptionsByGroupId = pickGroupId => (dispatch) => {
    dispatch(requestStart(PICK_REQUEST_LIST_START));
    return fetch(
        `${baseUrl}${pickGroupId}/`, {
            method: 'get'
        })
        .then(response => response.json())
        .then((pickGroupsList) => {
            dispatch({
                type: PICK_REQUEST_GROUP_ID,
                payload: {
                    pickGroupId
                }
            });
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
        baseUrl, {
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
                dispatch({
                    type: PICK_REQUEST_GROUP_ID,
                    payload: {
                        pickGroupId: groupId
                    }
                });
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

/**
 *
 * @param pickGroupId
 */
export const getPickFilters = pickGroupId => (dispatch) => {
    console.log(pickGroupId);
    return fetch(
        `${baseUrl}${pickGroupId}/`, {
            method: 'get'
        })
        .then(response => response.json())
        .then((json) => {
            dispatch({
                type: 'PICK/',
                payload: json
            });
        })
        .catch((error) => {
            dispatch(requestError(PICK_REQUEST_RESULT_ERROR, error));
            return error;
        });
};

/**
 * Getting result by filter (thunk)
 * @param requestBody
 * @param pathName
 */
// m, page, filters, pickGroupId - поля формы
export const getPickResults = (requestBody, pathName) => (dispatch) => {
    const {
        [PICK_FORM_GROUP_ID]: pickGroupId,
        [PICK_FORM_PAGE]: page,
        [PICK_FORM_MANUFACTURERS]: m,
        [PICK_FORM_FILTERS]: filters
    } = requestBody;

    console.log('rb', requestBody);
    // TODO [sf] 19.02.2018 add check if values are empty
    const queryParams = stringify({
        [PICK_FORM_FILTERS]: filterValuesStringify(filters),
        [PICK_FORM_MANUFACTURERS]: simpleFilterStringify(m)
    }, {encode: false});
    const p = `${pathName}?page=${page}&${queryParams}`;
    const p1 = `?page=${page}&${queryParams}`;
    console.log('p', p);
    console.log('qp', queryParams);
    dispatch(requestStart(PICK_REQUEST_RESULT_START));

    // TODO add flag if push or not
    dispatch(push(p));

    return fetch(
        `${baseUrl}${pickGroupId}/${p1}`, {
            method: 'get'
        })
        .then(response => response.json())
        .then((json) => {
            // const {page, pagination} = json;
            dispatch({
                type: PICK_REQUEST_RESULT_SUCCESS,
                payload: {
                    loader: false,
                    pickResult: [
                        {
                            id: 100
                        },
                        {
                            id: 200
                        }
                    ]
                }
            });
            return json;
        })
        .catch((error) => {
            dispatch(requestError(PICK_REQUEST_RESULT_ERROR, error));
            return error;
        });
};

/**
 *
 */
export const toggleBoxesHandler = (filterGroupId) => {
    console.log(filterGroupId);
};
