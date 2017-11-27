import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './home.scss';

export class Home extends Component {
    render() {
        console.log(styles);
        return (
            <div className="home">
                <h4>home</h4>
                <div>
                    <Link to="/fiche">fiche</Link>
                </div>
            </div>
        );
    }
}

/*
 Home.PropTypes = {
 myProp: PropTypes.number
 };
 */
