import {get} from 'lodash';
import {STORAGE_CART_KEY, STORAGE_CART_KEY_PRODUCTS} from './constants';

export const parseLocalCart = () => {
    const storage = localStorage[STORAGE_CART_KEY];
    return JSON.parse(storage);
};

export const isProductInLocalCart = (productId) => {
    const cartJson = parseLocalCart();
    console.log('cj', cartJson);
    return get(cartJson, STORAGE_CART_KEY_PRODUCTS, []).find(prodItem => prodItem.productsId === productId);
};
