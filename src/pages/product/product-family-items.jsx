import React from 'react';
// import {SERVER_ENVIRONMENT} from 'constants/server-environment';
// import {fullDomain} from 'utils/fullDomain';
import {ProductLink} from 'components/product-link';

export const ProductFamilyItems = ({itemsList = []}) => itemsList.length > 0 && (
    <div className="product-card__family-list">
        {
            itemsList.map((product) => {
                const {
                    info,
                    productId,
                    priceFinal
                } = product;
                return (
                    <div
                        key={productId}
                        className="product-card__family-list-item"
                    >
                        <div>
                            <ProductLink
                                className="product-card__family-list-link"
                                productUrl={`/product/${product.urlData.url}`}
                                productId={productId}
                                productName={info.products_name}
                            />
                            {' '}
                            {productId}
                        </div>
                        <div>Цена {priceFinal.priceCustomer}</div>
                    </div>
                );
            })
        }
    </div>
);
