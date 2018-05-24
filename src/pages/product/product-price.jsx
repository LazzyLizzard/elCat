import React from 'react';

export const ProductPrice = ({price = {}}) => (
    <div>
        <h4>price</h4>
        {price.priceCustomer}
    </div>
);
