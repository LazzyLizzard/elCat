import React from 'react';
import {connect} from 'react-redux';
import {formValueSelector, reduxForm, Field} from 'redux-form';
import {isNil} from 'lodash';
import {ButtonCart} from 'components/button-cart';
import {Input} from 'components/ui/input-text';
import {quantityButtonHandler} from './actions';

class ProductCart extends React.Component {
    onSubmitWithArgument = additionalArgument => values => this.props.onSubmit(values, additionalArgument);
    // onSubmitWithArgument = additionalArgument => function (values) {
    //     return this.props.onSubmit(values, additionalArgument);
    // };

    render() {
        const {handleSubmit, submitting, forCartData: {id, superProduct}} = this.props;
        const isDisabled = superProduct || isNil(id);
        console.log('submitting', submitting);
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
                            disabled={isDisabled}
                        >
                            -
                        </button>
                        <Field
                            component={Input}
                            // type="text"
                            name="q"
                            value={this.props.filterValues}
                        />
                        [{this.props.filterValues}]
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
                        props selectedProductId: {id}
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(state => ({
    filterValues: formValueSelector('to-cart')(state, 'q'),
    // filterId: formValueSelector('to-cart')(state, 'id'),
    fields: ['id', 'q']
}), {quantityButtonHandler})(
    reduxForm({
        form: 'to-cart'
    })(ProductCart)
);
