import React from 'react';
import {PriceSingle} from './price-single';
import {PriceRange} from './price-range';

const renderPriceContainer = ({
    superProduct, cartPrice, priceFinal, descendantPriceRange
}) => {
    if (superProduct && cartPrice) {
        return (<PriceSingle price={cartPrice} />);
    } if (!superProduct && priceFinal) {
        return (<PriceSingle price={priceFinal.priceCustomer} />);
    }
    return (<PriceRange range={descendantPriceRange} />);
};

export const ProductPrice = ({...props}) => (
    <div className="product-card__price">
        {renderPriceContainer({...props})}
    </div>
);
