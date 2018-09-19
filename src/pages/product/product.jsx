import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty, pick} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
// import {ProductToCart} from 'modules/product-to-cart';
import {NAMESPACE} from './reducer';
import {getRootData} from './selectors';
import {getProductInfo, clearProductData, fillCartData, addToCart} from './actions';
import {ProductFamily} from './product-family';
import {ProductPrice} from './product-price';
import {ProductParams} from './product-params';
import {ProdustAncestor} from './product-ancestor';
import ProductCart from './product-cart';
import {ProductSuperVariants} from './product-super-variants';
import './product.scss';

// const rx = /^(\w+)_(\d+).html/;
const getProductIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);
const getFamilyTitle = superProduct => (superProduct === true ? 'потомки' : 'братья');
// const propsPath = 'product.data.productId';
const propsPath = 'location.pathname';
// const briefFields = ['info', 'priceFinal', 'superProduct'];

// const getCartButtonState = () => true;
//
// const ddd = field => (getState) => {
//     console.log('**********');
//     console.log(getState()[field]);
// };


class Product extends React.Component {
    state = {
        productId: null,
        customerId: null
    };

    componentDidMount() {
        const {
            location: {pathname, state: locationState},
            getProductInfo: g
        } = this.props;
        const productId = get(locationState, 'productId', getProductIdFromUrl(pathname));
        g(productId);
    }

    componentDidUpdate(prevProps) {
        // const {
        //     location: {pathname, state: locationState},
        //     getProductInfo: g
        // } = this.props;
        //
        // const productId = get(locationState, 'productId', getProductIdFromUrl(pathname));
        //
        // if (productId !== get(prevProps, 'product.data.productId')) {
        //     g(productId);
        // }

        console.log(prevProps);
        console.log('CDU %s %s ', get(this.props, propsPath), get(prevProps, propsPath));
    }

    componentWillUnmount() {
        this.props.clearProductData();
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        const {
            location: {pathname, state},
            getProductInfo
        } = nextProps;

        const productId = get(state, 'productId', getProductIdFromUrl(pathname));
        //
        // if (productId !== prevState.productId) {
        //     getProductInfo(productId);
        //     return {
        //         productId
        //     };
        // }

        const customerId = get(nextProps, 'profile.customer.id', null);

        if (customerId !== prevState.customerId) {
            getProductInfo(productId);
            return {
                customerId
            };
        }
        return null;
    }

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
                error,
                forCart
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
                            minimalQuantity={1}
                            descendantPriceRange={descendantPriceRange}
                        />

                        <ProductCart
                            initialValues={{q: 1, id: null}}
                            forCartData={forCart}
                            minimalQuantity={1}
                            onSubmit={this.props.addToCart}
                        />

                        {superProduct && <ProductSuperVariants
                            selectedProductId={get(forCart, 'id')}
                            descendants={descendants}
                            fillDataHandler={this.props.fillCartData}
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
        profile: state.profile,
        rootData: getRootData(NAMESPACE)(state)
        // productFamily: getProductFamily(NAMESPACE)(state)
    }),
    {
        getProductInfo,
        clearProductData,
        fillCartData,
        addToCart
    }
)(Product);
