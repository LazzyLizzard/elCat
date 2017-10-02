import React from 'react';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from '../model/reducer';

export class FicheHome extends React.Component {
    render() {
        return (
            <div>
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
