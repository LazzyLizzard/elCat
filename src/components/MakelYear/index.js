import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

export class MakeYear extends Component {
    render() {
        return (
            <div>
                <div><Link to="/">home</Link></div>

                <h4>make year</h4>

                honda &nbsp;
                <Link to="/myt/1/1990/">1990</Link> &nbsp;
                <Link to="/myt/1/1991/">1991</Link>

            </div>
        );
    }
}

MakeYear.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number
};
