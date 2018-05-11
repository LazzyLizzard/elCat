import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';
// import PropTypes from 'prop-types';
import {NAMESPACE} from 'pages/pick/reducer';
import {
    // getGroupIdByName,
    requestPickList,
    getOptionsByGroupId,
    resetGroupsList,
    getPickResults
} from 'pages/pick/actions';

export class PickFormContainer extends PureComponent {
    render() {
        return (
            <div>
                <h2>PickFormContainer</h2>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        [NAMESPACE]: state[NAMESPACE],
        ownLocation: ownProps.location,
        filterValues: getFormValues(NAMESPACE)(state)
    }),
    dispatch => ({
        requestPickList: pickGroupName => dispatch(requestPickList(pickGroupName)),
        getOptionsByGroupId: id => dispatch(getOptionsByGroupId(id)),
        resetGroupsList: () => dispatch(resetGroupsList()),
        getPickResults: (requestBody, pathName) => dispatch(getPickResults(requestBody, pathName)),
        pageNumberClick: (pageNumber) => {
            console.log(pageNumber);
        }
    }))(PickFormContainer);
