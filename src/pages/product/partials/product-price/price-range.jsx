import React from 'react';
import {MDASH} from 'constants/empty-values';

const renderPriceRange = ({range: {pricesEqual, priceNormal}}) => {
    if (pricesEqual) {
        return (
            <div className="product-card__price-value">{priceNormal.min}</div>
        );
    }
    return (
        <React.Fragment>
            <div className="product-card__price-value">{priceNormal.min} {MDASH} {priceNormal.max}</div>
            <div className="product-card__price-note">Цена зависит от модифкации</div>
        </React.Fragment>
    );
};

export const PriceRange = ({...props}) => (renderPriceRange(props));
