import React from 'react';
import {connect} from 'react-redux';
import {NAMESPACE} from 'pages/fiche/model/reducer';
import * as actions from './actions';
// import {ManufLister} from './manuf-list';
import {ViewByManufacturer} from './view-by-manufacturer';
import {ViewByTransportType} from './view-by-transport-type';
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

const components = {
    byManufacturer: ViewByManufacturer,
    byTransportType: ViewByTransportType
};

function ViewMode(props, storeNode) {
    // Correct! JSX type can be a capitalized variable.
    const SpecificView = components[props];
    return <SpecificView list={storeNode[props]} />;
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
        const Component = ViewMode(homeViewMode, manufacturers);
        return (
            <div>
                <ViewModes
                    currentViewMode={homeViewMode}
                    onClick={this.props.setHomeViewMode}
                    viewModes={VIEW_MODES}
                />
                <hr />
                {manufacturers && <Component />}

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FicheHome);
