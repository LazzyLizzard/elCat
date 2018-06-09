import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
import {NAMESPACE} from './reducer';
import {getProductInfo} from './actions';
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
        productUrl: null,
        customerId: null,
        // for superProduct only
        selectedProductId: null
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const {
            params: {productUrl},
            profile: {
                customer: {id: customerId}
            }
        } = nextProps;
        if (productUrl !== prevState.productUrl) {
            nextProps.productInfo(getIdFromUrl(productUrl));
            return {productUrl};
        }
        if (customerId !== prevState.customerId) {
            console.log('refetch product with Id');
        }
        return null;
    }

    selectProductForSuperProduct = (productId) => {
        console.log('selectProductForSuperProduct', productId);
        this.setState({
            selectedProductId: productId
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
                    superProduct
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
                </h2>
                {error && <div>{error.message}</div>}
                <ProdustAncestor ancestorData={ancestorData} />

                <div className="product-card__layout">
                    <div className="product-card__layout-image">
                        image
                    </div>
                    <div className="product-card__layout-props">

                        <div>Изготовитель {info.manufacturers_name}</div>
                        <ProductPrice price={priceFinal} />
                        <ProductCart
                            selectedProductId={this.state.selectedProductId}
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
        productInfo: productId => dispatch(getProductInfo(productId))
    })
)(Product);
