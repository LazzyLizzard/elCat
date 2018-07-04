import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty, pick} from 'lodash';
import {ELLIPSIS} from 'constants/empty-values';
import {NAMESPACE} from './reducer';
import {getProductInfo, clearProductData} from './actions';
import {ProductPage} from './product-page';
import './product.scss';

// const rx = /^(\w+)_(\d+).html/;
const getIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);
const getFamilyTitle = superProduct => (superProduct === true ? 'потомки' : 'братья');
const briefFields = ['info', 'priceFinal', 'superProduct'];

class Product extends React.PureComponent {
    state = {
        productId: null,
        customerId: null,
        // for superProduct only
        selectedProductId: null,
        selectedProductDataBrief: null,
        superProduct: 555
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
                productId,
                superProduct: get(nextProps, 'product.data.superProduct')
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
        const np = {...this.props, ...this.state};
        return (
            <ProductPage {...np} />
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
