import React from 'react';
import {get} from 'lodash';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {ButtonCheckboxGroup} from 'components/ui';

const formName = 'fff';

const testItems = [
    {
        value: 'value1',
        label: '120/70-17',
        featured: true
    },
    {
        value: '555',
        label: '140/60-17'
    },
    {
        value: 'long',
        label: '300/55-18'
    }
];

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
                    {get(this.props, 'filterValues', []).length} of {testItems.length}
                    <Field
                        component={ButtonCheckboxGroup}
                        items={testItems}
                        values={this.props.filterValues}
                        name="ppp"
                        multi
                    />
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
