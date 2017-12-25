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

/**
 *
 * @param {string} name
 * @param {array} data Array of objects
 * @return {null}
 */
const getGroupIdByName = (name, data) => {
    const result = find(data, item => item.groupNameTransformed === name);
    return result ? result.id : null;
};

class PickList extends React.Component {
    componentDidMount() {
        const {
            [NAMESPACE]: {pickList},
            routeParams: {pickGroupName}
        } = this.props;
        const id = getGroupIdByName(pickGroupName, pickList);
        console.warn(pickList, pickGroupName);
        // console.warn(id);

        if (!pickList) {
            this.props.requestPickList(this.props.getOptionsByGroupId, {id});
        } else {
            this.props.getOptionsByGroupId({id});
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
        requestPickList: (operation, options) => dispatch(actions.requestPickList(operation, options)),
        getOptionsByGroupId: id => dispatch(actions.getOptionsByGroupId(id)),
        resetGroupsList: () => dispatch(actions.resetGroupsList())
    }))(PickList);
