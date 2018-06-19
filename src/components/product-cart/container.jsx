import React from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

class x extends React.PureComponent {

}

export default connect(
    state => ({
        x: state
    }),
    null)(
    reduxForm({
        form: 'attToCart'
    })(x)
);
