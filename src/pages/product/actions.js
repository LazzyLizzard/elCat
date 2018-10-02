import {change} from 'redux-form';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {REMOTE_HTTPS} from 'constants/server-request-environment';
import {ENDPOINT_PRODUCT} from 'constants/end-points';
import {requestError} from 'utils/request-steps';
import {PRODUCT_STATE} from 'data-srtuctures/product';
import {
    PRODUCT_FETCH_STARTED,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_ERROR,
    PRODUCT_CLEAR,
    PRODUCT_FILL_CART_DATA
} from './reducer';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PRODUCT}`;

export const getProductInfo = productId => (dispatch) => {
    dispatch({
        type: PRODUCT_FETCH_STARTED,
        payload: {
            loader: true
        }
    });
    return fetch(
        `${baseUrl}${productId}/`,
        {method: 'get'}
    )
        .then(response => response.json())
        .then(json => dispatch({
            type: PRODUCT_FETCH_SUCCESS,
            payload: {
                data: json,
                error: null,
                loader: false
            }
        }))
        .catch((error) => {
            dispatch(requestError(PRODUCT_FETCH_ERROR, error));
            return error;
        });
};

export const fillCartData = cartData => (dispatch) => {
    dispatch({
        type: PRODUCT_FILL_CART_DATA,
        payload: {
            forCart: {...cartData}
        }
    });
    dispatch(change('to-cart', 'id', cartData.id));
};

export const resetFormOnIdChange = productId => (dispatch) => {
    dispatch(change('to-cart', 'id', productId));
    dispatch(change('to-cart', 'q', 1));
};

export const clearProductData = () => ({
    type: PRODUCT_CLEAR,
    payload: PRODUCT_STATE
});

export const quantityButtonHandler = (currentValue, action) => (dispatch) => {
    const value = Number(currentValue);
    dispatch(change('to-cart', 'q', action === 'add'
        ? String(value + 1)
        : String(value - 1))
    );
};

export const addToCart = (requestBody, otherArgs) => (dispatch) => {
    console.log('addToCart', requestBody, otherArgs);
    const {customerId} = otherArgs;

    if (!customerId) {
        console.log('NO CUST');
        // storing cart in localStorage, ids - in redux store, syncing etc
        // console.log('WLS', window.localStorage);
    } else {
        console.log('CUST');
        dispatch({
            type: 'PRODUCT/ADD_TO_CART',
            payload: {
                ttt: 666
            }
        });
    }
};
