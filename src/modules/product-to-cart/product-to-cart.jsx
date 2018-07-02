import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {valueSelector} from "localResolve/pages/pick/pick-list/selectors";

class ProductToCart extends React.PureComponent {

}

export default connect(state => ({
    filterValues: valueSelector(state, 'filters')
}), null)(
    reduxForm({
        form: 'to-cart'
    })(ProductToCart)
);
