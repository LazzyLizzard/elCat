import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty, pick} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
import {ProductToCart} from 'modules/product-to-cart';
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
const briefFields = ['info', 'priceFinal', 'superProduct'];
// const getCartButtonState = () => true;
//
// const ddd = field => (getState) => {
//     console.log('**********');
//     console.log(getState()[field]);
// };


class Product extends React.PureComponent {
    state = {
        productId: null,
        customerId: null,
        // for superProduct only
        selectedProductId: null,
        selectedProductDataBrief: null
    };

    componentWillUnmount() {
        this.props.clearProductData();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('GDSFP');
        console.log(() => nextProps.getZ('sss'));

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
                productId,
                superProduct: () => nextProps.getZ('product')
            };
        }

        const customerId = get(nextProps, 'profile.customer.id', null);
        console.log(customerId, prevState.customerId);

        if (customerId !== prevState.customerId) {
            productInfo(productId);
            return {
                // ...prevState,
                customerId
            };
        }

        return null;
    }

    selectProductForSuperProduct = (productId) => {
        console.log('selectProductForSuperProduct', productId);
        this.setState((prevState) => {
            if (prevState.selectedProductId !== productId) {
                const {product: {data}} = this.props;
                const field = data.superProduct ? 'descendants' : 'brothers';

                const x = pick(data[field].find(item => item.productId === productId), briefFields);
                console.log(x.superProduct);

                return {
                    selectedProductId: productId,
                    superProduct: x.superProduct,
                    selectedProductDataBrief: x

                };
            }
            return null;
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

export default connect(
    state => ({
        [NAMESPACE]: state[NAMESPACE],
        profile: state.profile
    }),
    dispatch => ({
        productInfo: productId => dispatch(getProductInfo(productId)),
        clearProductData: () => dispatch(clearProductData()),
        getZ: field => (getState) => {
            console.log(field);
            console.log(getState()[field]);
        }
    })
)(Product);
