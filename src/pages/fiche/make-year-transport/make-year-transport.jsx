import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from './actions';
import {ModelsList} from './models-list';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        byAallData: (make, type, year) => dispatch(actions.mtyModelData(make, type, year))
    };
}

class MakeYearTransport extends Component {
    componentDidMount() {
        const {routeParams: {make, transport, year}} = this.props;
        this.props.byAallData(make, transport, year);
    }

    render() {
        const {fiche: {modelsList}} = this.props;
        return (
            <div>
                <h4>make year transport</h4>
                {modelsList &&
                <ModelsList modelsList={modelsList} />
                }

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
