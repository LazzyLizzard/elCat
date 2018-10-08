import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <h3>cart</h3>
            </div>
        );
    }
}
export const CartConnected = connect(
    null,
    null
)(Cart);

