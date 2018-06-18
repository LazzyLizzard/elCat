import React from 'react';
import {get, isEmpty} from 'lodash';

export const ProductPrice = ({price = {}, descendantPriceRange = {}}) => {
    const range = get(descendantPriceRange, 'priceNormal');
    if (!isEmpty(range)) {
        return (
            <div>
                {
                    descendantPriceRange.pricesEqual === false
                        ? `${range.min} - ${range.max}`
                        : range.min
                }
            </div>
        );
    }
    return (
        <div>
            Цена: {price.priceCustomer}
        </div>
    );
};
