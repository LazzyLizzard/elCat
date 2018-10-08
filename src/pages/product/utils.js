import {STORAGE_CART_KEY, STORAGE_CART_KEY_PRODUCTS} from './constants';
import {isProductInLocalCart, parseLocalCart} from './cart-utils';

// TODO [sf] 05-Oct-18  add regex check
// const rx = /^(\w+)_(\d+).html/;
export const getProductIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);

export const getFamilyTitle = superProduct => (superProduct === true ? 'потомки' : 'братья');

export const addToLocalCart = (productData) => {
    console.log('p', productData);
    const inCart = isProductInLocalCart(productData.productId);
    const localCart = parseLocalCart();
    if (!inCart) {
        localStorage
            .setItem(STORAGE_CART_KEY, JSON.stringify({
                ...localCart,
                ...{
                    [STORAGE_CART_KEY_PRODUCTS]: [...localCart[STORAGE_CART_KEY_PRODUCTS], ...[productData]]
                }
            }));
    } else {

    }
};
