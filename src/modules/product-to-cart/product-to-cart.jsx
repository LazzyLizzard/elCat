import React from 'react';
import {reduxForm, formValueSelector, Field} from 'redux-form';
import {connect} from 'react-redux';

class ProductToCart extends React.PureComponent {
    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    {/*<Field*/}
                    {/*name="q"*/}
                    {/*component="input"*/}
                    {/*type="text"*/}
                    {/*/>*/}
                    <button type="button">go</button>
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
