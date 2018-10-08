import {STORAGE_CART_KEY, STORAGE_CART_KEY_PRODUCTS} from './constants';

const isProductInLocalCart = (productId) => {
    const storage = localStorage[STORAGE_CART_KEY];
    return storage[STORAGE_CART_KEY_PRODUCTS].find(prodItem => prodItem.productsId === productId);
};

