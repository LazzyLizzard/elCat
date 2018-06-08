/* eslint-disable camelcase */
import React from 'react';
import {noop} from 'lodash';

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
                            }
                        } = item;
                        return (
                            <div
                                onClick={() => itemClicHandler(products_id)}
                                className={`product-card__option-items-item ${selectedProductId === products_id && 'product-card__option-items-item--active'}`}
                                key={products_id}
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
