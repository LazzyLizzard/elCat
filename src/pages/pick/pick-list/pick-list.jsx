/**
 * Entry point for pick form
 */
import React from 'react';
import connect from 'redux';
import {find} from 'lodash';
import * as actions from '../actions';
import PickForm from './pick-form';
import {showResults} from './../show-results';
import {NAMESPACE} from '../reducer';

const getGroupIdByName = (id, data) => {
    const result = find(data, item => item.id === id);
    return result ? result.id : null;
};


class PickList extends React.Component {
    componentDidMount() {
        const {
            routeParams: {pickGroupName},
            [NAMESPACE]: {pickList}
        } = this.props;
        let groupId = null;

        if (!pickList) {
            this.props.pickListFetcher();
        } else {
            groupId = getGroupIdByName(pickGroupName);
            if (groupId) {
                this.props.pickListGroupsFetcher(groupId);
            }
        }
    }

    render() {
        console.log(this.props);
        return <PickForm onSubmit={showResults} />;
    }
}

export default connect(
    null,
    dispatch => ({
        pickListFetcher: () => dispatch(actions.requestPickList()),
        pickListGroupsFetcher: id => dispatch(actions.getOptionsByGroupId(id))
    }))(PickList);
