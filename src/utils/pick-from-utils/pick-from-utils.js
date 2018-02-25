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
    // console.log(pickFilters);
    if (!isNil(pickFilters)) {
        pickFilters.forEach((groupData, index) => {
            if (groupData.length > 0 && some(groupData, val => val === true)) {
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
    const z = [];
    const [code, values] = part.split(':');
    return {
        ...acc,
        [code]: values.split(',').reduce((arr, key) => {
            z[parseInt(key, 10)] = true;
            return z;
        }, [])
    };
}, {});

/**
 *
 * @param {Array} data
 * @returns {*}
 */
export const simpleFilterStringify = (data = []) => {
    if (data.length && some(data, val => val === true)) {
        const a = data.reduce((arr, key, index) => [...arr, String(index)], []);
        // TODO [sf] 19.02.2018 maybe rewrite to string concat
        return a.join(',');
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
