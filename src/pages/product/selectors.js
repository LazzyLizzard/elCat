import {memoize, get} from 'lodash';
import {formValueSelector} from 'redux-form';
import {createSelector} from 'reselect';
// import {getNameSpace} from 'utils/get-namespace';
import {PRODUCT_FAMILY_FIELDS, DESCENDANTS, BROTHERS} from './constants';

export const getNameSpace = nameSpace => state => state[nameSpace];

export const getRootData = memoize(nameSpace => createSelector(
    getNameSpace(nameSpace),
    data => data.product)
);

export const getProductFamily = createSelector(
    getNameSpace(),
    productInfo => get(productInfo, [
        PRODUCT_FAMILY_FIELDS[BROTHERS],
        PRODUCT_FAMILY_FIELDS[DESCENDANTS]
    ])
);

const valueSelector = formValueSelector('to-cart');
//
export const getCartQuantity = state => valueSelector(state, 'q');

export const getCartProductId = state => valueSelector(state, 'id');
