/**
 * Entry point for pick form
 */
import React from 'react';
import {connect} from 'react-redux';
import {find, isNil} from 'lodash';
import * as actions from '../actions';
// import PickForm from './pick-form';
// import {showResults} from './../show-results';
import {NAMESPACE} from '../reducer';

const getGroupIdByName = (name, data) => {
    const result = find(data, item => item.groupNameTransformed === name);
    return result ? result.id : null;
};


class PickList extends React.Component {
    componentDidMount() {
        const {
            [NAMESPACE]: {pickList}
        } = this.props;

        if (!pickList) {
            this.props.pickListFetcher();
        }
    }

    componentWillUnmount() {
        this.props.pickListGroupsReset();
    }

    render() {
        console.log('render list');
        const {
            routeParams: {pickGroupName},
            [NAMESPACE]: {pickList, pickListGroups}
        } = this.props;

        let groupId = null;
        if (!isNil(pickList) && isNil(pickListGroups)) {
            groupId = getGroupIdByName(pickGroupName, pickList);

            // ETERNAL LOOP HERE
            // какого хера нет рекции на заполенение pickListGroups?
            this.props.pickListGroupsFetcher(groupId);
        }
        console.log(pickList, pickListGroups);
        // return <PickForm onSubmit={showResults} />;
        return (
            <div>
                [{groupId}],
                {
                    pickList ? '1' : '0'
                }
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        pickListFetcher: () => dispatch(actions.requestPickList()),
        pickListGroupsFetcher: id => dispatch(actions.getOptionsByGroupId(id)),
        pickListGroupsReset: () => dispatch(actions.resetGroupsList())
    }))(PickList);
