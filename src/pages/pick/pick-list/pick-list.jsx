/**
 * Entry point for pick form
 */
import React from 'react';
import {connect} from 'react-redux';
// import {find, isNil} from 'lodash';
import * as actions from '../actions';
// import PickForm from './pick-form';
// import {showResults} from './../show-results';
import {NAMESPACE} from '../reducer';

// const getGroupIdByName = (name, data) => {
//     const result = find(data, item => item.groupNameTransformed === name);
//     return result ? result.id : null;
// };

// const fff = (groupId) => {
//     return function (groupId) {
//         return this.props.pickListGroupsFetcher(groupId);
//     };
// }

class PickList extends React.Component {
    componentDidMount() {
        const {
            [NAMESPACE]: {pickList}
        } = this.props;

        if (!pickList) {
            this.props.pickListFetcher(this.props.pickListGroupsFetcher, {groupId: 32});
        }
    }

    componentWillUnmount() {
        this.props.pickListGroupsReset();
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
        pickListFetcher: (operation, options) => dispatch(actions.requestPickList(operation, options)),
        pickListGroupsFetcher: id => dispatch(actions.getOptionsByGroupId(id)),
        pickListGroupsReset: () => dispatch(actions.resetGroupsList())
    }))(PickList);
