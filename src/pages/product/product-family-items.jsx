import React from 'react';
import {Link} from 'react-router';

export const ProductFamilyItems = ({itemsList = []}) => {
    if (itemsList.length > 0) {
        return (
            <div className="product-card__family-list">
                {
                    itemsList.map((product) => {
                        const {
                            info,
                            priceFinal
                        } = product;
                        return (
                            <div
                                key={info.products_id}
                                className="product-card__family-list-item"
                            >
                                <div>
                                    <Link
                                        rel="canonical"
                                        className="product-card__family-list-link"
                                        to={{
                                            pathname: `/product/${product.urlData.url}`,
                                            state: {
                                                productId: info.products_id
                                            }
                                        }}
                                    >
                                       * {info.products_name}
                                    </Link>
                                    {' '}
                                    {info.products_id}
                                </div>
                                <div>Цена {priceFinal.priceCustomer}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return null;
};
