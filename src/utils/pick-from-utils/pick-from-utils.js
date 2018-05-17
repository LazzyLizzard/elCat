import {isNil, forEach, some} from 'lodash';

/**
 * Converts form data object to queryString-like string
 * Only suitable for filters field.
 * Input object like {500:[true, true, false, false, null, null, true]}
 * Output string like 500:1,2,3;700:5,9 - accepting only true values
 * @param {object} pickFilters
 * @return {string}
 */
export const filterValuesStringify = (pickFilters) => {
    const filterParams = {};
    const finalValue = [];
    console.log('pickFilters', pickFilters);
    if (!isNil(pickFilters)) {
        pickFilters.forEach((groupData, index) => {
            console.log('groupData', groupData);
            if (typeof groupData !== 'undefined' && groupData.length > 0 && some(groupData, val => val === true)) {
                // TODO [sf] 19.02.2018 rewrite with .reduce()
                filterParams[index] = [];
                groupData.forEach((itemData, itemIndex) => {
                    if (itemData === true) {
                        filterParams[index].push(String(itemIndex));
                    }
                });
            } else if (filterParams[index]) {
                delete filterParams[index];
            }
        });
    }
    forEach(filterParams, (paramItem, paramIndex) => {
        if (paramIndex) {
            finalValue.push(`${paramIndex}:${paramItem.join(',')}`);
        }
    });

    return finalValue.join(';');
};

// 500:1,2,3;700:5,7,9
// ['500:1,2,3', '700:5,7,9']
// {500: [null, true, true, true]}
/**
 * Parse string presentation to object
 * @param {string} inp
 * @return {object}
 */

export const filterValuesParse = inp => inp.split(';').reduce((acc, part) => {
    const [code, values] = part.split(':');
    acc[code] = values.split(',').reduce((_acc, key) => {
        const newAcc = _acc.slice();
        newAcc[parseInt(key, 10)] = true;
        return newAcc;
    }, []);
    return acc;
}, []);

/**
 *
 * @param {Array} data
 * @returns {*}
 */
export const simpleFilterStringify = (data = []) => {
    if (data.length && some(data, val => val === true)) {
        return data.reduce((arr, key, index) => [...arr, String(index)], []).join(',');
    }
    return null;
};

export const simpleFilterParse = (string = '') => {
    const proc = string.split(',');
    // const z = [];
    return proc.reduce((acc, part) => {
        acc[parseInt(part, 10)] = true;
        return acc;
    }, []);
};

export const prepareAutoFillData = (query) => {
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
