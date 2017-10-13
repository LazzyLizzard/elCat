import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from '../model/reducer';

export class MakeYearTransport extends Component {
    render() {
        return (
            <div>
                <h4>make year transport</h4>

            </div>
        );
    }
}

MakeYearTransport.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number,
    transportId: PropTypes.number
};
