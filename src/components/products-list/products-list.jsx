import React from 'react';
import PropTypes from 'prop-types';

export const ProductsList = (productsList = []) => {
    if (productsList.length === 0) {
        return null;
    }
    return (
        <div>
            <h3>prod list</h3>
            <div>
                {
                    productsList.map(product => (
                        <div
                            key={product.info.products_id}
                        >
                            id {product.info.products_id}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

ProductsList.propTypes = {
    productsList: PropTypes.array
};
