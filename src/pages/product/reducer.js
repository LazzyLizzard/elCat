import {get} from 'lodash';
import {PRODUCT_STATE} from 'data-srtuctures/product';

export const NAMESPACE = 'product';

const extendProductData = (state, payload) => {
    const superProduct = get(payload, 'data.superProduct', null);
    const cartData = {
        forCart: {
            id: superProduct ? null : get(payload, 'data.productId', -1),
            superProduct
        }
    };
    return {...state, ...payload, ...cartData};
};

export const PRODUCT_FETCH_STARTED = 'PRODUCT/FETCH_STARTED';
export const PRODUCT_FETCH_SUCCESS = 'PRODUCT/FETCH_SUCCESS';
export const PRODUCT_FETCH_ERROR = 'PRODUCT/FETCH_ERROR';
export const PRODUCT_CLEAR = 'PRODUCT/CLEAR';
export const PRODUCT_FILL_CART_DATA = 'PRODUCT/FILL_CART_DATA';

export const productReducer = (state = PRODUCT_STATE, action) => {
    switch (action.type) {
        case PRODUCT_FETCH_STARTED:
        case PRODUCT_FETCH_ERROR:
        case PRODUCT_CLEAR:
        case PRODUCT_FILL_CART_DATA:
            return {...state, ...action.payload};

        case PRODUCT_FETCH_SUCCESS:
            return extendProductData(state, action.payload);

        default:
            return state;
    }
};
