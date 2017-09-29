import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from './../../../pages/fiche/reducer';

export class MakeType extends Component {
    render() {
        return (
            <div>
                <h4>make type</h4>
                <div>honda atv <Link to={`/${FICHE_NAMESPACE}/myt/1/2/1991`}>1991</Link> 1992</div>
            </div>
        );
    }
}

MakeType.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number
};
