import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from './actions';
import {YearsList} from './years-list';
import {NAMESPACE} from '../model/reducer';

function mapDispatchToProps(dispatch) {
    return {
        getYears: (manufId, transportTypeId) => dispatch(actions.requestYearsData(manufId, transportTypeId))
    };
}

function mapStateToProps(state) {
    return state;
}

class MakeType extends Component {
    componentDidMount() {
        const {routeParams: {make, typeId}} = this.props;
        this.props.getYears(make, typeId);
    }

    render() {
        const {[NAMESPACE]: {loader, error, years}, routeParams: {make, typeId}} = this.props;
        return (
            <div>
                <div><Link to="/">home</Link></div>
                <h4>make type TRUE</h4>
                {years &&
                <YearsList yearsList={years} make={make} typeId={typeId} />
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeType);

MakeType.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number
};
