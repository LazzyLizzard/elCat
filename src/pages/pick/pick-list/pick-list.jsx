/**
 * Entry point for pick form
 */
import React from 'react';
import {connect} from 'react-redux';
import {change, submit} from 'redux-form';
import * as actions from '../actions';
import PickForm from './pick-form';
import {PickResults} from './pick-results';
// import {showResults} from './../show-results';
import {NAMESPACE} from '../reducer';

const xCl = () => (dispatch) => {

}

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
        console.log('render');
        const {[NAMESPACE]: {pickListGroups, pickResult, pagination}} = this.props;
        return (
            <div>
                {pickListGroups && (
                    <div>
                        <h4>Picker</h4>
                        <PickForm pickFormData={pickListGroups} onSubmit={this.props.getPickResults} />
                        <PickResults
                            result={pickResult}
                            pagination={pagination}
                            pageClickHandler={this.props.pageNumberClick}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        requestPickList: pickGroupName => dispatch(actions.requestPickList(pickGroupName)),
        getOptionsByGroupId: id => dispatch(actions.getOptionsByGroupId(id)),
        resetGroupsList: () => dispatch(actions.resetGroupsList()),
        getPickResults: requestBody => dispatch(actions.getPickResults(requestBody)),
        pageNumberClick: (pageNumber) => {
            dispatch(change(NAMESPACE, 'page', pageNumber));
            setTimeout(() => {
                dispatch(submit(NAMESPACE));
            }, 50);
        }
    }))(PickList);
