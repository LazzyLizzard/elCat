import React, {Component} from 'react';
import {Link} from 'react-router';

export class App extends Component {
    render() {
        return (
            <div>
                <h3>Elcat app (<Link to="/">go</Link>)</h3>
                {this.props.children}
            </div>);
    }
}

