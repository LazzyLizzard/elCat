import React from 'react';
import {connect} from 'react-redux';
import {fakeLogin, fakeLogout} from './atctions';

class FakeAuth extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.login()}>fake login</button>
                <button onClick={() => this.props.logout()}>fake logout</button>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    profile: state.profile
}),
dispatch => ({
    login: () => dispatch(fakeLogin()),
    logout: () => dispatch(fakeLogout())
}))(FakeAuth);
