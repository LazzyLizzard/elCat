import 'whatwg-fetch';
import {find, omit, pick, toPairs, isNil} from 'lodash';
import {push} from 'react-router-redux';
import {stringify} from 'query-string';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'constants/server-request-environment';
import {ENDPOINT_PICK} from 'constants/end-points';
import {filterValuesStringify, simpleFilterProcess} from 'utils/pick-from-utils';
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

export const PICK_SET_PAGE_FROM_PAGINATION = 'PICK/SET_PAGE_FROM_PAGINATION';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PICK}`;

const formDataProcessFields = ['m', 'filters'];

/**
 *
 * @param {Object} formData
 * @param {Array} fieldsToProcess
 */
const transformFieldsToString = (formData = {}, fieldsToProcess = []) => {
    const proc = toPairs(pick(formData, fieldsToProcess));
    const tempArray = [];
    return proc.reduce((acc, part) => {
        const [key, val] = part;
        if (!isNil(val)) {
            // tempArray[key] = filterValuesStringify(val);
            console.log(filterValuesStringify(val));
            tempArray[key] = filterValuesStringify(val);
            return {
                ...acc,
                ...tempArray
            };
        }
        return null;
    }, []);
};

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
        `${baseUrl}${id}`, {
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
 * Getting result by filter (thunk)
 * @param requestBody
 * @param path
 */
export const getPickResults = (requestBody, path) => (dispatch) => {
    const {pickGroupId, page, m} = requestBody;
    // console.log(filterValuesStringify(filters));
    const filtersString = transformFieldsToString(requestBody, formDataProcessFields);
    // const filtersString = '';

    console.log(m);
    console.log(simpleFilterProcess(m));
    // console.log(pick(requestBody, ['filters']));
    // console.log(filtersString);

    // m, page, filters, pickGroupId - поля сабмита
    dispatch(requestStart(PICK_REQUEST_RESULT_START));
    dispatch(push(`${path}?page=${page}&${stringify(filtersString, {encode: false})}`));
    return fetch(
        `${baseUrl}${pickGroupId}?page=${page}&${stringify(filtersString, {encode: false})}`, {
            method: 'get'
        })
        .then(response => response.json())
        .then((json) => {
            // const {page, pagination} = json;
            dispatch({
                type: PICK_REQUEST_RESULT_SUCCESS,
                payload: {
                    loader: false,
                    pickResult: {[page]: omit(json, ['page', 'pagination'])},
                    ...[1, 2, 3]
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
