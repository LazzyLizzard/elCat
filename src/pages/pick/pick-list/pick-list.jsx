/**
 * Entry point for pick form
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, getFormInitialValues} from 'redux-form';
import {noop, isNil, get} from 'lodash';
import * as actions from '../actions';
import PickForm from './pick-form';
import {PickResults} from './pick-results';
import {NAMESPACE} from '../reducer';

let paginationBaseUrl;
// &page=1&filters=500:1,2,3;700:3,4,5;vendor:1,2,3
// const mockedForm = {
//     page: 1,
//     filters: []
// };

// const reservedFields = ['page', 'vendors'];

/**
 * Converts form data object to queryString-like string
 * @param {object} formValues
 */
const formValuesToFormData = (formValues) => {
    const params = {};
    const pickFilters = get(formValues, 'filters', null);
    if (!isNil(pickFilters)) {
        pickFilters.forEach((groupData, index) => {
            params[index] = [];
            groupData.forEach((itemData, itemIndex) => {
                if (itemData !== null && itemData !== false) {
                    params[index].push(String(itemIndex));
                }
            });
        });
    }
    console.log(params);
    return params;
}

class PickList extends React.Component {
    componentDidMount() {
        // console.log(this.props.op);
        // console.log(this);
        const {
            [NAMESPACE]: {pickList},
            routeParams: {pickGroupName},
            pickFormValues
            // pickFormInitialValues,

        } = this.props;

        formValuesToFormData(pickFormValues);
        // console.log(processedFormValues);

        paginationBaseUrl = `${NAMESPACE}/${pickGroupName}`;

        if (!pickList) {
            this.props.requestPickList(pickGroupName);
        } else {
            const id = actions.getGroupIdByName(pickGroupName, pickList);
            this.props.getOptionsByGroupId(id);
        }

        // if (isEqual(pickFormValues, pickFormInitialValues)) {
        //     console.log('simple request');
        // } else {
        //     console.log('check searc in query string');
        // }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        formValuesToFormData(nextProps.pickFormValues);
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
        const {[NAMESPACE]: {pickListGroups, pickResult, pagination, error}} = this.props;
        return (
            <div>
                {pickListGroups && (
                    <div>
                        <h4>Picker</h4>
                        {error && (
                            <div style={{color: '#c70000'}}>{error.message}</div>
                        )}
                        <PickForm
                            pickFormData={pickListGroups}
                            onSubmit={this.props.getPickResults}
                        />
                        <PickResults
                            result={pickResult}
                            pagination={pagination}
                            pageClickHandler={this.props.pageNumberClick}
                            baseUrl={paginationBaseUrl}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        pick: state.pick,
        pickFormValues: getFormValues(NAMESPACE)(state),
        pickFormInitialValues: getFormInitialValues(NAMESPACE)(state),
        ownLocation: ownProps.location
        // ...state
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
