import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Link} from 'react-router';
import {NAMESPACE as FICHE_NAMESPACE} from '../model/reducer';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        byAallData: (make, type, year) => dispatch(actions.mtyModelData(make, type, year))
        // onClicker: dispatch => modelId => getModelData(modelId)
    };
}

class MakeYearTransport extends Component {

    componentDidMount() {
        const {routeParams: {make, transport, year}} = this.props;
        this.props.byAallData(make, transport, year);
    }

    render() {
        return (
            <div>
                <h4>make year transport</h4>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeYearTransport);

MakeYearTransport.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number,
    transportId: PropTypes.number
};
