import React from 'react';
import {connect} from 'react-redux';
import {formValueSelector, reduxForm} from 'redux-form';
import {isNil} from 'lodash';
import {ButtonCart} from 'components/button-cart';

class ProductCart extends React.PureComponent {
    render() {
        const {forCartData: {id, superProduct}} = this.props;
        console.log('-> isSuperProduct', superProduct);
        return (
            <div>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div>
                    <ButtonCart
                        disabled={superProduct || isNil(id)}
                        label="Купить"
                    />
                    {' '}
                    props selectedProductId: {id}
                </div>
            </div>
        );
    }
}
export default connect(state => ({
    filterValues: formValueSelector('to-cart')(state, 'q'),
    fields: ['id', 'q']
}), null)(
    reduxForm({
        form: 'to-cart'
    })(ProductCart)
);
