import React from 'react';
import {Link} from 'react-router';

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

            </div>
        );
    }
}
