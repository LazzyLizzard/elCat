/* eslint-disable camelcase */
import React from 'react';
import {noop} from 'lodash';
import classNames from 'classnames';

export const ProductSuperVariants = (props) => {
    const {
        descendants = [],
        itemClicHandler = noop,
        selectedProductId = null
    } = props;
    if (descendants.length > 0) {
        return (
            <div className="product-card__option-items">
                {
                    descendants.map((item) => {
                        const {
                            info: {
                                products_id,
                                products_name,
                                products_name_for_list
                            },
                            priceFinal
                        } = item;
                        return (
                            <div
                                onClick={() => itemClicHandler(products_id)}
                                className={classNames(
                                    'product-card__option-items-item',
                                    {'product-card__option-items-item--active': selectedProductId === products_id}
                                )}
                                key={products_id}
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
