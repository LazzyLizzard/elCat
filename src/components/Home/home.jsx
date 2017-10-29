import React, {Component} from 'react';
import {Link} from 'react-router';

export class Home extends Component {
    render() {
        return (
            <div>
                <h4>home</h4>
                <div><Link to="/fiche">fiche</Link></div>
            </div>
        );
    }
}

/*
 Home.PropTypes = {
 myProp: PropTypes.number
 };
 */
