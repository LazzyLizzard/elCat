import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty, pick} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
// import {ProductToCart} from 'modules/product-to-cart';
import {NAMESPACE} from './reducer';
import {getRootData, getCartQuantity, getCartProductId} from './selectors';
import {getProductInfo, clearProductData, fillCartData, addToCart, setFormValuesOnChangeId} from './actions';
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
const propsPathLocation = 'location.pathname';
const propsPathCustomer = 'profile.customer.id';
// const briefFields = ['info', 'priceFinal', 'superProduct'];

// const getCartButtonState = () => true;
//
// const ddd = field => (getState) => {
//     console.log('**********');
//     console.log(getState()[field]);
// };


const xwr = (fnc, arrgs) => {
    const productsId = get(arrgs, 'data.product.productsId');
    const superProduct = get(arrgs, 'data.product.superProducts');
    return fnc({productsId, superProduct});
};

class Product extends React.PureComponent {
    componentDidMount() {
        const {
            location: {pathname, state: locationState},
            getProductInfo: g,
            setFormValuesOnChangeId: r
        } = this.props;
        const productId = get(locationState, 'productId', getProductIdFromUrl(pathname));
        g(productId, r, productId);
        // g(productId, xwr(r => r(x)));
    }

    componentDidUpdate(prevProps) {
        const {
            location: {pathname, state: locationState},
            getProductInfo: g,
            setFormValuesOnChangeId: r
        } = this.props;

        const customerId = get(this.props, propsPathCustomer, null);
        const productId = get(locationState, 'productId', getProductIdFromUrl(pathname));


        if (get(this.props, propsPathLocation) !== get(prevProps, propsPathLocation)) {
            // g(productId, r, productId);
            g(productId, xwr(a => r(a)));
        }

        if (customerId !== get(prevProps, propsPathCustomer, null)) {
            g(productId);
        }
    }

    componentWillUnmount() {
        this.props.clearProductData();
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

                <div className="product-card__layout">
                    <div className="product-card__layout-image">
                        image
                    </div>
                    <div className="product-card__layout-props">

                        <div>Изготовитель {info.manufacturers_name}</div>
                        <ProdustAncestor
                            ancestorData={ancestorData}
                            familyItems={descendants || brothers}
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
                            selectedProductId={this.props.productId}
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
        rootData: getRootData(NAMESPACE)(state),
        // productFamily: getProductFamily(NAMESPACE)(state)
        cartQuantity: getCartQuantity(state),
        productId: getCartProductId(state)

    }),
    {
        getProductInfo,
        clearProductData,
        fillCartData,
        addToCart,
        setFormValuesOnChangeId
    }
)(Product);
