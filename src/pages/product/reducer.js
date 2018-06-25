import {PRODUCT_STATE} from 'data-srtuctures/product';

export const NAMESPACE = 'product';

export const PRODUCT_FETCH_STARTED = 'PRODUCT/FETCH_STARTED';
export const PRODUCT_FETCH_SUCCESS = 'PRODUCT/FETCH_SUCCESS';
export const PRODUCT_FETCH_ERROR = 'PRODUCT/FETCH_ERROR';
export const PRODUCT_CLEAR = 'PRODUCT/CLEAR';

export const productReducer = (state = PRODUCT_STATE, action) => {
    switch (action.type) {
        case PRODUCT_FETCH_STARTED:
        case PRODUCT_FETCH_SUCCESS:
        case PRODUCT_FETCH_ERROR:
        case PRODUCT_CLEAR:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
};
