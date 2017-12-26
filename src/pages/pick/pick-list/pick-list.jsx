/**
 * Entry point for pick form
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import PickForm from './pick-form';
// import {showResults} from './../show-results';
import {NAMESPACE} from '../reducer';

class PickList extends React.Component {
    componentDidMount() {
        const {
            [NAMESPACE]: {pickList},
            routeParams: {pickGroupName}
        } = this.props;

        if (!pickList) {
            this.props.requestPickList(pickGroupName);
        } else {
            const id = actions.getGroupIdByName(pickGroupName, pickList);
            this.props.getOptionsByGroupId(id);
        }
    }

    componentWillUnmount() {
        this.props.resetGroupsList();
    }

    render() {
        console.log('render list');

        // return <PickForm onSubmit={showResults} />;
        return (
            <div>
                q
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        requestPickList: (pickGroupName) => dispatch(actions.requestPickList(pickGroupName)),
        getOptionsByGroupId: id => dispatch(actions.getOptionsByGroupId(id)),
        resetGroupsList: () => dispatch(actions.resetGroupsList())
    }))(PickList);
