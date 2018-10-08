import {noop} from 'lodash';
import {change} from 'redux-form';
import {REMOTE_HTTPS} from 'constants/server-request-environment';
import {FIELD_PRICE, FIELD_PRODUCT_ID, FIELD_QUANTITY} from 'constants/form-fields-naming';
import {getRequestEnvironment} from 'utils/get-request-environment';
import {ENDPOINT_PRODUCT} from 'constants/end-points';
import {requestError} from 'utils/request-steps';
import {PRODUCT_STATE} from 'data-srtuctures/product';
import {
    PRODUCT_FETCH_STARTED,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_ERROR,
    PRODUCT_CLEAR
} from './reducer';

const baseUrl = `${getRequestEnvironment(REMOTE_HTTPS)}${ENDPOINT_PRODUCT}`;

export const getProductInfo = (productId, after = noop) => (dispatch) => {
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
        .then((data) => {
            if (typeof after === 'function') {
                after(data);
            }
            return data;
        })
        .catch((error) => {
            dispatch(requestError(PRODUCT_FETCH_ERROR, error));
            return error;
        });
};

export const fillCartData = cartData => (dispatch) => {
    const {productId, price} = cartData;
    dispatch(change('to-cart', FIELD_PRODUCT_ID, productId));
    // dispatch(change('to-cart', 'price', isEmpty(price) ? null : price));
    dispatch(change('to-cart', FIELD_PRICE, price || null));
};

export const setFormValuesOnChangeId = ({productId, superProduct}) => (dispatch) => {
    dispatch(change('to-cart', FIELD_PRODUCT_ID, superProduct ? null : productId));
    dispatch(change('to-cart', FIELD_QUANTITY, 1));
    dispatch(change('to-cart', FIELD_PRICE, null));
};

export const clearProductData = () => ({
    type: PRODUCT_CLEAR,
    payload: PRODUCT_STATE
});

export const quantityButtonHandler = (currentValue, action) => (dispatch) => {
    const value = Number(currentValue);
    dispatch(change('to-cart', FIELD_QUANTITY, action === 'add'
        ? value + 1
        : value - 1)
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
