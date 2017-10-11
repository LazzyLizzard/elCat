import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from '../model/reducer';

export class MakeYear extends Component {
    render() {
        return (
            <div>
                <h4>make type</h4>
            </div>
        );
    }
}

MakeYear.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number
};
