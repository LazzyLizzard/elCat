import React from 'react';
import {Link} from 'react-router';

export const ProductLink = ({
    className = '',
    productUrl,
    productId = null,
    productName
}) => (
    <Link
        className={className}
        to={{
            pathname: productUrl,
            state: {
                productId
            }
        }}
    >
        {productName}
    </Link>
);
