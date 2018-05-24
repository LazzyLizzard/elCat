import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty} from 'lodash';
import {NAMESPACE} from './reducer';
import {getProductInfo} from './actions';
import {ProductDescendants} from './product-descendants';
import {ProductPrice} from './product-price';
import {ProductParams} from './product-params';

// const rx = /^(\w+)_(\d+).html/;
const getIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);

class Product extends React.PureComponent {
    state = {
        productUrl: null
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const {params: {productUrl}} = nextProps;
        if (productUrl !== prevState.productUrl) {
            nextProps.productInfo(getIdFromUrl(productUrl));
            return {productUrl};
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
                    priceFinal,
                    parameters
                },
                error
            }
        } = this.props;

        return (
            <div>
                <h2>
                    {!isNil(get(info, 'products_name'))
                        ? info.products_name
                        : '...'
                    }
                </h2>
                {error && <div>{error.message}</div>}
                <ProductPrice price={priceFinal} />
                <ProductParams params={parameters} />
                <ProductDescendants descendants={descendants} />
            </div>
        );
    }
}

export default connect(
    state => ({
        [NAMESPACE]: state[NAMESPACE]
    }),
    dispatch => ({
        productInfo: productId => dispatch(getProductInfo(productId))
    })
)(Product);
