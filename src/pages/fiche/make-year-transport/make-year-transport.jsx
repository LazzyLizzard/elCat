import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from './../../../pages/fiche/reducer';

export class MakeYearTransport extends Component {
    render() {
        return (
            <div>
                <h4>make year transport</h4>

                <div> c :
                    <Link to={`/${FICHE_NAMESPACE}/model/465`} modelId={500}>cr500</Link> 500 |
                    <Link to={`/${FICHE_NAMESPACE}/model/4657`} modelId={700}>cb700</Link> 700
                </div>
            </div>
        );
    }
}

MakeYearTransport.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number,
    transportId: PropTypes.number
};
