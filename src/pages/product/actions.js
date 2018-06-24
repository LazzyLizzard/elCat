import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'constants/server-request-environment';
import {ENDPOINT_PRODUCT} from 'constants/end-points';
import {requestError} from 'utils/request-steps';
import {PRODUCT_STATE} from 'data-srtuctures/product';
import {PRODUCT_FETCH_SUCCESS, PRODUCT_FETCH_ERROR, PRODUCT_CLEAR} from './reducer';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PRODUCT}`;

export const getProductInfo = productId => dispatch => fetch(
    `${baseUrl}${productId}/`,
    {method: 'get'}
)
    .then(response => response.json())
    .then((json) => {
        dispatch({
            type: PRODUCT_FETCH_SUCCESS,
            payload: {
                data: json,
                error: null,
                loader: false
            }
        });
    })
    .catch((error) => {
        dispatch(requestError(PRODUCT_FETCH_ERROR, error));
        return error;
    });

export const clearProductData = () => ({
    type: PRODUCT_CLEAR,
    payload: PRODUCT_STATE
});
