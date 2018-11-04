import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {ButtonCheckboxGroup} from 'components/ui/button-checkbox-group';

const testItems = [
    {
        value: 'value1',
        label: 'Значение 1',
        disabled: true
    },
    {
        value: '555',
        label: 'hello'
    },
    {
        value: 'long',
        label: 'Длинная стрка'
    }
];

const xxx = e => console.log(e);

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

                <div>
                    <Field
                        component={ButtonCheckboxGroup}
                        items={testItems}
                        values={['555']}
                        name="ppp"
                    />
                </div>
            </div>
        );
    }
}

export const Profile = connect(null, null)(
    reduxForm({
        form: 'fff'
    })(ProfilePlain)
);
