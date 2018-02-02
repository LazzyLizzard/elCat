import {isNil, get} from 'lodash';

// const reservedFields = ['page', 'vendors'];

/**
 * Converts form data object to queryString-like string
 * @param {object} formValues
 */
export const formValuesToFormData = (formValues) => {
    const params = {};
    const pickFilters = get(formValues, 'filters', null);
    if (!isNil(pickFilters)) {
        pickFilters.forEach((groupData, index) => {
            params[index] = [];
            groupData.forEach((itemData, itemIndex) => {
                if (itemData !== null && itemData !== false) {
                    params[index].push(String(itemIndex));
                }
            });
        });
    }
    console.log(params);
    return params;
};

export const queryStringToFormData = () => {};
