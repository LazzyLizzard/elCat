import React from 'react';
import {connect} from 'react-redux';
import {get, isNil, isEmpty} from 'lodash';
import {NAMESPACE} from './reducer';
import {getProductInfo} from './actions';
import {ProductDescendants} from './product-descendants';


class Product extends React.PureComponent {
    componentDidMount() {
        const {params: {productUrl}} = this.props;
        const productId = productUrl.split('.')[0].split('_')[1];
        this.props.productInfo(productId);
    }

    componentWillReceiveProps() {

    }

    render() {
        console.log(this.props.product);

        if (isEmpty(this.props.product.data)) {
            return null;
        }

        const {
            product: {
                data: {
                    info,
                    descendants
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
