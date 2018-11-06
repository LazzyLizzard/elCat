import React from 'react';
import {connect} from 'react-redux';
import {NAMESPACE} from 'pages/fiche/model/reducer';
import {requestManufacturers, setHomeViewMode} from './actions';
import {ViewByManufacturer} from './view-by-manufacturer';
import {ViewByTransportType} from './view-by-transport-type';
import {ViewModes} from './view-modes';

const VIEW_MODES = [
    {id: 1, key: 'byManufacturer', text: 'производитель + тип'},
    {id: 2, key: 'byTransportType', text: 'тип + производитель'}
];

const components = {
    byManufacturer: ViewByManufacturer,
    byTransportType: ViewByTransportType
};

function viewMode(viewKey) {
    return components[viewKey];
}

class FicheHomeComponent extends React.Component {
    componentDidMount() {
        const {[NAMESPACE]: {manufacturers}} = this.props;
        if (!manufacturers) {
            this.props.requestManufacturers();
        }
    }

    render() {
        const {[NAMESPACE]: {manufacturers, homeViewMode}} = this.props;
        const MyComponent = viewMode(homeViewMode);
        return (
            <div>
                <h3>fiche home 1</h3>
                <ViewModes
                    currentViewMode={homeViewMode}
                    onClick={this.props.setHomeViewMode}
                    viewModes={VIEW_MODES}
                />
                <hr />
                {manufacturers && <MyComponent data={manufacturers[homeViewMode]} />}
            </div>
        );
    }
}

export const FicheHome = connect(
    state => state,
    {
        requestManufacturers,
        setHomeViewMode
    }
)(FicheHomeComponent);
