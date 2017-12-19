/**
 *
 * @param {string} type An action type
 */
export const requestStart = type => ({
    type,
    payload: {
        loader: true
    }
});

/**
 *
 * @param {string} type An action type
 * @param {string} fieldName Field (key) name
 * @param {object} data
 */
export const requestSuccess = (type, fieldName, data) => ({
    type,
    payload: {
        loader: false,
        [fieldName]: data
    }
});

/**
 *
 * @param {string} type An action type
 * @param {object} error
 */
export const requestError = (type, error) => ({
    type,
    payload: {
        loader: false,
        error
    }
});
