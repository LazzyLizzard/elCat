import React from 'react';
import {connect} from 'react-redux';
import {NAMESPACE} from 'pages/fiche/model/reducer';
import * as actions from './actions';
import {ManufLister} from './manuf-list';
import {ViewModes} from './view-modes';

const VIEW_MODES = [
    {id: 1, key: 'byManufacturer', text: 'производитель + тип'},
    {id: 2, key: 'byTransportType', text: 'тип + производитель'}
];


function mapDispatchToProps(dispatch) {
    return {
        manufRequest: () => dispatch(actions.requestManufacturers()),
        setHomeViewMode: homeViewMode => dispatch(actions.setHomeViewMode(homeViewMode))
    };
}

function mapStateToProps(state) {
    return state;
}

class FicheHome extends React.Component {
    componentDidMount() {
        const {[NAMESPACE]: {manufacturers}} = this.props;
        if (!manufacturers) {
            this.props.manufRequest();
        }
    }

    render() {
        const {[NAMESPACE]: {manufacturers, homeViewMode}} = this.props;
        return (
            <div>
                <ViewModes
                    currentViewMode={homeViewMode}
                    onClick={this.props.setHomeViewMode}
                    viewModes={VIEW_MODES}
                />
                <hr />
                {manufacturers && <ManufLister list={manufacturers.byManufacturer} />}

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FicheHome);
