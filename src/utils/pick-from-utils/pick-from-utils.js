import {isNil, get, forEach, some, toPairs} from 'lodash';

// const reservedFields = ['page', 'vendors'];

/**
 * Converts form data object to queryString-like string
 * @param {object} formValues
 * @return {string}
 */
export const formValuesToFormData = (formValues) => {
    const filterParams = {};
    const finalValue = [];
    const pickFilters = get(formValues, 'filters', null);
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
// []

export const queryStringToFormData = (string) => {
    const exploded = string.split(';');
    const retVal = [];
};