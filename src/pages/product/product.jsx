import React from 'react';
import {connect} from 'react-redux';
import {NAMESPACE} from './reducer';
import {getProductInfo} from './actions';


class Product extends React.PureComponent {
    componentDidMount() {
        const {params: {productUrl}} = this.props;
        const productId = productUrl.split('.')[0].split('_')[1];
        this.props.productInfo(productId);
    }

    render() {
        console.log(this.props.product);

        const {product} = this.props;

        return (
            <div>
                <h3>Product</h3>
                {product.error && <div>{product.error.message}</div>}
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
