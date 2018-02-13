import {isNil, forEach, some} from 'lodash';

// const reservedFields = ['page', 'vendors'];

// const toJSON = val => `${val}`;

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
    console.log(pickFilters);
    if (!isNil(pickFilters)) {
        pickFilters.forEach((groupData, index) => {
            if (groupData.length > 0 && some(groupData, val => val === true)) {
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
