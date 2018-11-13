import {find, get, isEmpty} from 'lodash';


/**
 * Getting group id by group name
 * @param {string} name
 * @param {array} data Array of objects, list of group names
 * @returns {null | number}
 */
export const getGroupIdByName = (name, data) => {
    const result = find(data, item => item.groupNameTransformed === name);
    return get(result, 'id', null);
};


/**
 * Converts form data object to queryString-like string
 * Only suitable for filters field.
 * Input object like {500:['100', '200']}
 * Output string like 500:1,2,3;700:5,9
 * @param {array} filters
 * @return {string}
 */

export const filterValuesStringify = (filters = []) =>
    filters
        .map((currentValue, index) => !isEmpty(currentValue) && `${index}:${currentValue.join(',')}`)
        .filter(currentValue => !isEmpty(currentValue))
        .join(';');


// 500:1,2,3;700:5,7,9
// ['500:1,2,3', '700:5,7,9']
/**
 * Parse string presentation to object
 * @param {string} inp
 * @return {object}
 */

export const filterValuesParse = inp =>
    inp
        .split(';')
        .reduce((acc, part) => {
            const [code, values] = part.split(':');
            acc[code] = values.split(',');
            return acc;
        }, []);


export const simpleFilterStringify = (data = []) => data.join(',');

export const simpleFilterParse = (string = '') => string.split(',');

export const prepareAutoFillData = (query = {}) => {
    const x = {};
    if (query.filters || query.m) {
        if (query.filters) {
            x.filters = filterValuesParse(query.filters);
        }
        if (query.m) {
            x.m = simpleFilterParse(query.m);
        }
        return x;
    }
    return null;
};
