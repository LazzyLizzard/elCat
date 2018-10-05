import React from 'react';
import {get, isEmpty} from 'lodash';
import {MDASH} from 'constants/empty-values';

export const ProductPrice = ({price = {}, descendantPriceRange = {}}) => {
    const range = get(descendantPriceRange, 'priceNormal');
    return (
        <div className="product-card__price">
            {
                !isEmpty(range)
                    ? <React.Fragment>
                        <div className="product-card__price-value">
                            {
                                descendantPriceRange.pricesEqual === false
                                    ? `${range.min} ${MDASH} ${range.max}`
                                    : range.min
                            }
                        </div>
                        <div className="product-card__price-note">Цена зависит от модифкации</div>
                    </React.Fragment>
                    : <div className="product-card__price-value">
                        Цена: {price.priceCustomer}
                    </div>
            }
        </div>
    );
};
