import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty, pick} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
import {NAMESPACE} from './reducer';
import {getProductInfo, clearProductData} from './actions';
import {ProductFamily} from './partials/product-family';
import {ProductPrice} from './partials/product-price/price-container';
import {ProductParams} from './partials/product-params';
import {ProdustAncestor} from './partials/product-ancestor';
import {ProductCart} from './product-cart';
import {ProductSuperVariants} from './partials/product-super-variants';
import './product.scss';
import {ProductToCart} from "localResolve/modules/product-to-cart";

// const rx = /^(\w+)_(\d+).html/;
const getIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);
const getFamilyTitle = superProduct => (superProduct === true ? 'потомки' : 'братья');
const briefFields = ['info', 'priceFinal', 'superProduct'];

export class ProductPage extends React.PureComponent {
    state = {
        productId: null,
        customerId: null,
        // for superProduct only
        selectedProductId: null,
        selectedProductDataBrief: null,
        superProduct: 555
    };

    render() {
        console.log(this.props);
        if (isEmpty(this.props.product.data)) {
            return null;
        }

        const {
            product: {
                data: {
                    info,
                    descendants,
                    ancestorData,
                    brothers,
                    priceFinal,
                    parameters,
                    superProduct,
                    descendantPriceRange
                },
                error
            }
        } = this.props;
        return (
            <div className="product-card">
                <h2>
                    {!isNil(get(info, 'products_name'))
                        ? info.products_name
                        : ELLIPSIS
                    }
                    {superProduct && ' [SUPERPROD]'}
                </h2>
                {error && <div>{error.message}</div>}
                <div>
                    <pre>
                        {JSON.stringify(this.state, null, '  ')}
                    </pre>
                </div>
                <hr />

                <div className="product-card__layout">
                    <div className="product-card__layout-image">
                        image
                    </div>
                    <div className="product-card__layout-props">

                        <div>Изготовитель {info.manufacturers_name}</div>
                        <ProdustAncestor
                            ancestorData={ancestorData}
                            familyItems={descendants || brothers}
                            superProduct={this.state.superProduct}
                        />
                        <ProductPrice
                            price={priceFinal}
                            descendantPriceRange={descendantPriceRange}
                        />

                        <ProductToCart
                            initialValues={{
                                q: 1,
                                id: 555
                            }}
                        />

                        <ProductCart
                            isSuperProduct={superProduct}
                            selectedProductId={info.products_id}
                            minimalQuantity={1}
                        />

                        {superProduct && <ProductSuperVariants
                            selectedProductId={this.state.selectedProductId}
                            descendants={descendants}
                            itemClicHandler={this.selectProductForSuperProduct}
                        />}

                        <ProductParams params={parameters} />

                    </div>
                </div>


                <ProductFamily
                    title={getFamilyTitle(superProduct)}
                    descendants={descendants || brothers}
                    allowFiltering
                    itemsPerBlock={10}
                />
            </div>
        );
    }
}

