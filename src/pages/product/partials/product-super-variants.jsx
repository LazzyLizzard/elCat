/* eslint-disable camelcase */
import React from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';

export const ProductSuperVariants = (props) => {
    const {
        descendants = [],
        // itemClicHandler = noop,
        selectedProductId = null,
        fillDataHandler = noop
    } = props;
    if (descendants.length > 0) {
        return (
            <div className="product-card__option-items">
                {
                    descendants.map((item) => {
                        const {
                            productId,
                            info: {
                                products_name,
                                products_name_for_list
                            },
                            priceFinal
                        } = item;
                        return (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                            <div
                                onClick={() => fillDataHandler({
                                    productId,
                                    price: priceFinal.priceCustomer
                                })}
                                className={classNames(
                                    'product-card__option-items-item',
                                    {'product-card__option-items-item--active': selectedProductId === productId}
                                )}
                                key={productId}
                                title={`${products_name}, цена - ${priceFinal.priceCustomer}`}
                            >
                                {products_name_for_list}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return null;
};
