import React from 'react';
import {connect} from 'react-redux';
import {formValueSelector, reduxForm, Field} from 'redux-form';
import {isNil} from 'lodash';
import {FIELD_PRICE, FIELD_PRODUCT_ID, FIELD_QUANTITY} from 'constants/form-fields-naming';
import {ButtonCart} from 'components/button-cart';
import {Input} from 'components/ui/input-text';
import {quantityButtonHandler} from './actions';

class ProductCart extends React.Component {
    onSubmitWithArgument = additionalArgument => values => this.props.onSubmit(values, additionalArgument);

    // onSubmitWithArgument = additionalArgument => function (values) {
    //     return this.props.onSubmit(values, additionalArgument);
    // };
    render() {
        const {
            handleSubmit, submitting, productId, superProduct
        } = this.props;
        const isDisabled = superProduct || isNil(productId);
        return (
            <div>
                <form
                    // onSubmit={(v) => {
                    //     console.log(v);
                    //     return handleSubmit(v);
                    // }}
                    onSubmit={handleSubmit(this.onSubmitWithArgument({customerId: null}))}
                >
                    <div>
                        <button
                            type="button"
                            onClick={() => this.props.quantityButtonHandler(this.props.filterValues, 'subtract')}
                            disabled={isDisabled || parseInt(this.props.filterValues, 10) === 1}
                        >
                            -
                        </button>
                        <Field
                            component={Input}
                            // TODO [sf] 01-Oct-18 disable steps by css
                            numeric
                            name="q"
                            value={this.props.filterValues}
                        />
                        [
                        {this.props.filterValues}
]
                        <button
                            type="button"
                            onClick={() => this.props.quantityButtonHandler(this.props.filterValues, 'add')}
                            disabled={isDisabled}
                        >
                            +
                        </button>
                    </div>
                    <div>
                        {submitting && <span>subm</span>}
                        <ButtonCart
                            disabled={isDisabled || submitting}
                            label="Купить"
                        />
                        {' '}
                        props selectedProductId:
                        {' '}
                        {productId}
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(state => ({
    filterValues: formValueSelector('to-cart')(state, FIELD_QUANTITY),
    // filterId: formValueSelector('to-cart')(state, 'id'),
    fields: [FIELD_PRODUCT_ID, FIELD_QUANTITY, FIELD_PRICE]
}), {quantityButtonHandler})(
    reduxForm({
        form: 'to-cart'
    })(ProductCart)
);
