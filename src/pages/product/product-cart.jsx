import React from 'react';
import {connect} from 'react-redux';
import {formValueSelector, reduxForm} from 'redux-form';
import {isNil} from 'lodash';
import {ButtonCart} from 'components/button-cart';
import {quantityButtonHandler} from './actions';

class ProductCart extends React.Component {
    onSubmitWithArgument = additionalArgument => values => this.props.onSubmit(values, additionalArgument);

    render() {
        const {handleSubmit, forCartData: {id, superProduct}} = this.props;
        const isDisabled = superProduct || isNil(id);



        return (
            <div>
                <form
                    // onSubmit={handleSubmit}
                    onSubmit={handleSubmit(this.onSubmitWithArgument({customerId: null}))}
                >
                    <div>
                        <button
                            onClick={this.props.quantityButtonHandler}
                            disabled={isDisabled}
                        >
                            -
                        </button>
                        {/*<input type="text" name="q" value={this.props.filterValues} />*/}
                        [{this.props.filterValues}]
                        <button
                            onClick={this.props.quantityButtonHandler}
                            disabled={isDisabled}
                        >
                            +
                        </button>
                    </div>
                    <div>
                        <ButtonCart
                            disabled={isDisabled}
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
    fields: ['id', 'q']
}), {quantityButtonHandler})(
    reduxForm({
        form: 'to-cart'
    })(ProductCart)
);
