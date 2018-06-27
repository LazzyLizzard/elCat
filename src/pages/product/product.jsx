import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
import {NAMESPACE} from './reducer';
import {getProductInfo, clearProductData} from './actions';
import {ProductFamily} from './product-family';
import {ProductPrice} from './product-price';
import {ProductParams} from './product-params';
import {ProdustAncestor} from './product-ancestor';
import {ProductCart} from './product-cart';
import {ProductSuperVariants} from './product-super-variants';
import './product.scss';

// const rx = /^(\w+)_(\d+).html/;
const getIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);

const getFamilyTitle = superProduct => (superProduct === true ? 'потомки' : 'братья');

class Product extends React.PureComponent {
    state = {
        productId: null,
        customerId: null,
        // for superProduct only
        selectedProductId: null,
        selectedProductDataBrief: null,
        superProduct: true
    };

    componentWillUnmount() {
        this.props.clearProductData();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('GDSFP');

        const {
            location: {pathname, state},
            productInfo
        } = nextProps;

        const productId = get(state, 'productId') ? get(state, 'productId') : getIdFromUrl(pathname);
        console.log(productId, prevState.productId);

        if (productId !== prevState.productId) {
            console.log('fetch', productId);
            productInfo(productId);
            return {
                productId
            };
        }

        const customerId = get(nextProps, 'profile.customer.id', null);
        console.log(customerId, prevState.customerId);

        if (customerId !== prevState.customerId) {
            productInfo(productId);
            return {
                customerId
            };
        }

        return {
            superProduct: get(nextProps, 'product.data.superProduct')
        };
    }

    selectProductForSuperProduct = (productId) => {
        console.log('selectProductForSuperProduct', productId);
        this.setState((prevState) => {
            if (prevState.selectedProductId !== productId) {
                // TODO
            }
            return {
                selectedProductId: productId,
                superProduct: false
            }
        });
    };

    render() {
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

export default connect(
    state => ({
        [NAMESPACE]: state[NAMESPACE],
        profile: state.profile
    }),
    dispatch => ({
        productInfo: productId => dispatch(getProductInfo(productId)),
        clearProductData: () => dispatch(clearProductData())
    })
)(Product);
