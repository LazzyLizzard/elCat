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

function viewMode(viewKey) {
    // Correct! JSX type can be a capitalized variable.
    const SpecificView = components[viewKey];
    // return <SpecificView list={componentsMap[viewKey]} />;
    console.log(SpecificView);
    return <SpecificView />;
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
        const MyComponent = viewMode(homeViewMode);
        return (
            <div>
                <ViewModes
                    currentViewMode={homeViewMode}
                    onClick={this.props.setHomeViewMode}
                    viewModes={VIEW_MODES}
                />
                <hr />
                {/* {manufacturers && <Component test="hello" />} */}
                <MyComponent test="hello" />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FicheHome);
