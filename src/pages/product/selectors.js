import {memoize, get} from 'lodash';
import {createSelector} from 'reselect';
// import {getNameSpace} from 'utils/get-namespace';
import {PRODUCT_FAMILY_FIELDS, DESCENDANTS, BROTHERS} from './constants';

export const getNameSpace = nameSpace => state => state[nameSpace];

export const getRootData = memoize(nameSpace => createSelector(
    getNameSpace(nameSpace),
    (data) => {
        console.log(data);
        return data.product;
    })
);

export const getProductFamily = createSelector(
    getNameSpace(),
    productInfo => get(productInfo, [
        PRODUCT_FAMILY_FIELDS[BROTHERS],
        PRODUCT_FAMILY_FIELDS[DESCENDANTS]
    ])
);
