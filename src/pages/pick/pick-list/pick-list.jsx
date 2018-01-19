/**
 * Entry point for pick form
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {change, submit} from 'redux-form';
import {noop} from 'lodash';
import * as actions from '../actions';
import PickForm from './pick-form';
import {PickResults} from './pick-results';
// import {showResults} from './../show-results';
import {NAMESPACE} from '../reducer';

let paginationBaseUrl;
// &page=1&filters=500:1,2,3;700:3,4,5;vendor:1,2,3
const mockedForm = {
    filters: [
        {
            page: 1,
            50: {
                700: true,
                701: true
            },
            vendors: {
                100: true
            }
        }
    ]
};

class PickList extends React.Component {
    componentDidMount() {
        const {
            [NAMESPACE]: {pickList},
            routeParams: {pickGroupName}
        } = this.props;

        paginationBaseUrl = `${NAMESPACE}/${pickGroupName}`;

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
                        <PickForm
                            pickFormData={pickListGroups}
                            onSubmit={this.props.getPickResults}
                        />
                        <PickResults
                            result={pickResult}
                            pagination={pagination}
                            pageClickHandler={this.props.pageNumberClick}
                            formData={mockedForm}
                            baseUrl={paginationBaseUrl}
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
        getPickResults: (requestBody) => {
            console.warn((requestBody));
            dispatch(actions.getPickResults(requestBody));
        },
        pageNumberClick: (pageNumber) => {
            console.log(pageNumber);
        }
    }))(PickList);

PickList.propTypes = {
    routeParams: PropTypes.object,
    requestPickList: PropTypes.func,
    getOptionsByGroupId: PropTypes.func,
    resetGroupsList: PropTypes.func
};

PickList.defaultProps = {
    routeParams: {},
    requestPickList: noop,
    getOptionsByGroupId: noop,
    resetGroupsList: noop
};
