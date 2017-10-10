import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from '../model/reducer';

export class MakeType extends Component {
    render() {
        return (
            <div>
                <h4>make type</h4>
            </div>
        );
    }
}

MakeType.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number
};
