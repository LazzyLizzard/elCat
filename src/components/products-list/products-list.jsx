import React from 'react';
// import PropTypes from 'prop-types';
import {get, isNil} from 'lodash';
import {ProductLink} from 'components/product-link';

export const ProductsList = ({productsList = {}}) => {
    const {page, data} = productsList;
    if (isNil(get(productsList, 'data'))) {
        return null;
    }
    return (
        <div>
            <h3>prod list, page {page}</h3>
            <div>
                {
                    data.map(product => (
                        <div
                            key={product.info.products_id}
                        >
                            id
                            <ProductLink
                                productUrl={`/product/${product.urlData.url}`}
                                productId={product.info.products_id}
                                productName={product.info.products_name}
                            />
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

// ProductsList.propTypes = {
//     productsList: PropTypes.shape({
//         page: PropTypes.number,
//         data: PropTypes.array
//     })
// };
