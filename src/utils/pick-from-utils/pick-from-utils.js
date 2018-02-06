import {isNil, get, forEach, some} from 'lodash';

// const reservedFields = ['page', 'vendors'];

// const toJSON = val => `${val}`;

/**
 * Converts form data object to queryString-like string
 * Only suitable for filters field.
 * Input object like {500:[{1:true, 2:true, 3:false}]}
 * Output string like 500:1,2,3;700:5,9 - skipping false and null values
 * @param {object} formValues
 * @return {string}
 */
export const formValuesStringify = (formValues) => {
    const filterParams = {};
    const finalValue = [];
    const pickFilters = get(formValues, 'filters', null);
    console.log(pickFilters);
    if (!isNil(pickFilters)) {
        pickFilters.forEach((groupData, index) => {
            if (groupData.length > 0 && some(groupData, val => val === true)) {
                filterParams[index] = [];
                groupData.forEach((itemData, itemIndex) => {
                    if (itemData !== null && itemData !== false) {
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
// {500: [1,2,3], 700: [5,7,9]}

export const formValuesParse = (filtersString) => {
    // let x;
    const y = [];
    if (filtersString) {
        filtersString.split(';').forEach((item) => {
            const x = item.split(':');
            console.log('item ', item.split(':'));
            y[x[0]] = x[1].split(',').map(zz => ({[zz]: true}));
        });
    }
    console.log(y);
};
