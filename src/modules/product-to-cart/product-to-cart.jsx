import React from 'react';
import {isNil} from 'lodash';
import {reduxForm, formValueSelector, Field} from 'redux-form';
import {connect} from 'react-redux';
import {ButtonCart} from '../../components/button-cart';

class ProductToCart extends React.PureComponent {
    render() {
        const {handleSubmit, forCartData: {id, superProduct}} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    {/* <Field */}
                    {/* name="q" */}
                    {/* component="input" */}
                    {/* type="text" */}
                    {/* /> */}
                    <ButtonCart
                        disabled={superProduct || isNil(id)}
                        label="Купить"
                    />
                </form>
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
    })(ProductToCart)
);
