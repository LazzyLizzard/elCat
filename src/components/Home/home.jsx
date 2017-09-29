import React, {Component} from 'react';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from './../../pages/fiche/reducer';

export class Home extends Component {
    render() {
        return (
            <div>
                <h4>home</h4>

                <div>
                    <div>
                        hon <Link to={`${FICHE_NAMESPACE}/mt/1/2`}>moto</Link>, <Link to={`${FICHE_NAMESPACE}/mt/1/2`}>ATV</Link>
                    </div>
                    <hr />
                    <div>kaw</div>
                    <div>suz</div>
                    <div>yam</div>
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
