import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from './actions';
import {NAMESPACE} from '../model/reducer';

function mapDispatchToProps(dispatch) {
    return {
        getYears: (manufId, transportTypeId) => dispatch(actions.requestYearsData(manufId, transportTypeId))
    };
}

function mapStateToProps(state) {
    return state;
}

class MakeYear extends Component {
    componentDidMount() {
        const {routeParams: {make, typeId}} = this.props;
        this.props.getYears(make, typeId);
    }

    render() {
        const {[NAMESPACE]: {loader, error, years}} = this.props;
        console.log(years);
        return (
            <div>
                <div><Link to="/">home</Link></div>
                <h4>make year</h4>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeYear);

MakeYear.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number
};
