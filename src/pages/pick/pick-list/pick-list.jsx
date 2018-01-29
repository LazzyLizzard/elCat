/**
 * Entry point for pick form
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {getFormValues, getFormInitialValues} from 'redux-form';
import {noop, isEqual} from 'lodash';
import * as actions from '../actions';
import PickForm from './pick-form';
import {PickResults} from './pick-results';
import {NAMESPACE} from '../reducer';

let paginationBaseUrl;
// &page=1&filters=500:1,2,3;700:3,4,5;vendor:1,2,3
const mockedForm = {
    filters:
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
};

// const reservedFields = ['page', 'vendors'];
//
// const formValuesToFormData = (formValues) => {
//
// }

class PickList extends React.Component {
    componentDidMount() {
        // console.log(this.props.op);
        console.log(this);
        const {
            [NAMESPACE]: {pickList},
            routeParams: {pickGroupName},
            pickFormValues,
            pickFormInitialValues,

        } = this.props;

        paginationBaseUrl = `${NAMESPACE}/${pickGroupName}`;

        if (!pickList) {
            this.props.requestPickList(pickGroupName);
        } else {
            const id = actions.getGroupIdByName(pickGroupName, pickList);
            this.props.getOptionsByGroupId(id);
        }

        if (isEqual(pickFormValues, pickFormInitialValues)) {
            console.log('simple request');
        } else {
            console.log('check searc in query string');
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // let eq;
        // if (isEqual(this.props.form.pick, nextProps.form.pick)) {
        //     eq = 'eq';
        // } else {
        //     eq = 'not eq';
        // }
        // console.warn(eq);
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
                <span onClick={() => this.props.pushToHistory()}>push</span>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        pickForValues: getFormValues(NAMESPACE)(state),
        pickForInitialValues: getFormInitialValues(NAMESPACE)(state),
        ownLocation: ownProps.location,
        ...state
    }),
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
        },
        pushToHistory: () => dispatch(push(`/${NAMESPACE}`)),
        setLocation: (page, formData) => dispatch()
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
