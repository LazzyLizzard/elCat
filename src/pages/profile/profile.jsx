import React from 'react';
import {Link} from 'react-router';
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

export class Profile extends React.Component {
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
                    <ButtonCheckboxGroup items={testItems} values={['555']} />
                </div>

            </div>
        );
    }
}
