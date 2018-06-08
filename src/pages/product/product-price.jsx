import React from 'react';

export const ProductPrice = ({price = {}}) => (
    <div>
        Цена: {price.priceCustomer}
    </div>
);
