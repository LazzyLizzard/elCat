import React from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';

const customerData = (WrappedComponent) => {
    class CustomerData extends React.Component {
        render() {
            return (<WrappedComponent {...this.props} />);
        }
    }
    return connect(state => ({
        profile: get(state, 'profile')
    }), null)(CustomerData);
};

export default customerData;
