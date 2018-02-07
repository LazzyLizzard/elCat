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
// {500: [1:true,2:true,3:true], 700: [53:true,73:true,93:true]}

export const formValuesParse = (filtersString) => {
    const y = [];
    if (filtersString) {
        filtersString.split(';').forEach((item) => {
            const x = item.split(':');
            console.log('item ', item.split(':'));
            y[x[0]] = x[1].split(',').map(zz => (y[x[0]][zz] = true));
        });
    }
    console.log(y);
};

function a(inp) {
    return inp.split(';').reduce((acc, part) => {
        const [code, values] = part.split(':');
        return {...acc, [code]: values.split(',').reduce((arr, key) => {
            arr[parseInt(key, 10)] = true;
            return arr;
        }, [])};
    }, {});
}
