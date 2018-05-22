import React from 'react';
// import PropTypes from 'prop-types';
import {get, isNil} from 'lodash';
import {Link} from 'react-router';

export const ProductsList = ({productsList = {}}) => {
    if (isNil(get(productsList, 'data'))) {
        return null;
    }
    console.log(typeof productsList);
    const {page, data} = productsList;
    return (
        <div>
            <h3>prod list, page {page}</h3>
            <div>
                {
                    data.map(product => (
                        <div
                            key={product.info.products_id}
                        >
                            id <Link to={`/${product.urlData.url}`}>{product.info.products_id}</Link>,
                            {product.info.products_name}
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
