import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {reduxForm, formValueSelector} from 'redux-form';

const formName = 'fff';


class ProfilePlain extends React.Component {
    render() {
        return (
            <div>
                <h3>profile</h3>
                <div>
                    <Link to="/profile/personal-info/">personal info</Link> |
                    <Link to="/profile/orders/">orders</Link> |
                    <Link to="/profile/address-book/">address book</Link>
                </div>
            </div>
        );
    }
}

export const Profile = connect(state => ({
    filterValues: formValueSelector(formName)(state, 'ppp')
}), null)(
    reduxForm({
        form: formName
    })(ProfilePlain)
);
