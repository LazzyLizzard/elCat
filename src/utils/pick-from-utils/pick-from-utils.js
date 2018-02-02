import {isNil, get} from 'lodash';

// const reservedFields = ['page', 'vendors'];

/**
 * Converts form data object to queryString-like string
 * @param {object} formValues
 * @return {string}
 */
export const formValuesToFormData = (formValues) => {
    const groupIndexes = [];
    const paramsString = [];
    const pickFilters = get(formValues, 'filters', null);
    if (!isNil(pickFilters)) {
        pickFilters.forEach((groupData, index) => {
            groupData.forEach((itemData, itemIndex) => {
                if (!isNil(itemData) && itemData !== false) {
                    groupIndexes.push(String(itemIndex));
                }
            });
            paramsString.push(`${index}:${groupIndexes.join(',')}`);
        });
    }
    return paramsString.join(';');
};

export const queryStringToFormData = () => {
};
