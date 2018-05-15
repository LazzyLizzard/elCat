/**
 * Entry point for pick form
 */
import React from 'react';
// import {createSelector} from 'reselect';
import {formValueSelector} from 'redux-form';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {noop, isNil} from 'lodash';
import {simpleFilterParse, filterValuesParse} from 'utils/pick-from-utils';
import {
    getGroupIdByName,
    requestPickList,
    getOptionsByGroupId,
    resetGroupsList,
    getPickResults
} from '../actions';
import PickForm from './pick-form';
import {PickResults} from './pick-results';
import {NAMESPACE} from '../reducer';

export const valueSelector = formValueSelector(NAMESPACE);
// export const getNumber = state => valueSelector(state, 'filters');

//
// const getSomeField = createSelector(
//     getFormValues(NAMESPACE),
//     funckinFormValues => funckinFormValues.filters
// );

// const getCheckxesCount = createSelector(
//     getFilersValues,
//     items => items.length
// );

const prepareAutoFillData = (query) => {
    const x = {};
    if (query.filters || query.m) {
        if (query.filters) {
            x.filters = filterValuesParse(query.filters);
        }
        if (query.m) {
            x.m = simpleFilterParse(query.m);
        }
        return x;
    }
    return null;
};

class PickList extends React.Component {
    componentDidMount() {
        const {
            [NAMESPACE]: {pickList},
            routeParams: {pickGroupName},
            ownLocation: {query}
        } = this.props;

        this.paginationBaseUrl = `${NAMESPACE}/${pickGroupName}`;

        if (isNil(pickList)) {
            this.props.requestPickList(pickGroupName);
        } else {
            this.pickGroupId = getGroupIdByName(pickGroupName, pickList);
            this.props.getOptionsByGroupId(this.pickGroupId);
        }

        this.autoFillData = prepareAutoFillData(query);
    }

    componentWillUnmount() {
        this.props.resetGroupsList();
    }

    render() {
        console.log('render');
        const {
            [NAMESPACE]: {pickListGroups, pickResult, pagination, error, pickGroupId},
            ownLocation: {pathname}
        } = this.props;

        if (pickListGroups) {
            return (
                <div>
                    <h4>Picker</h4>
                    {error && (
                        <div style={{color: '#c70000'}}>{error.message}</div>
                    )}
                    <PickForm
                        pickGroupId={pickGroupId}
                        pickFormData={pickListGroups}
                        pathName={pathname}
                        autoFillData={this.autoFillData}
                        onSubmit={this.props.getPickResults}
                        initialValues={{
                            pickGroupId,
                            page: 1
                        }}
                    />
                    <PickResults
                        result={pickResult}
                        pagination={pagination}
                        baseUrl={this.paginationBaseUrl}
                        pageClickHandler={this.props.pageNumberClick}
                        pathName={pathname}
                    />
                </div>
            );
        }
        return null;
    }
}

export default connect(
    (state, ownProps) => ({
        [NAMESPACE]: state[NAMESPACE],
        ownLocation: ownProps.location
    }),
    dispatch => ({
        requestPickList: pickGroupName => dispatch(requestPickList(pickGroupName)),
        getOptionsByGroupId: id => dispatch(getOptionsByGroupId(id)),
        resetGroupsList: () => dispatch(resetGroupsList()),
        getPickResults: (requestBody, pathName) => dispatch(getPickResults(requestBody, pathName)),
        pageNumberClick: (pageNumber) => {
            console.log(pageNumber);
        }
    }))(PickList);


PickList.propTypes = {
    routeParams: PropTypes.object,
    requestPickList: PropTypes.func,
    getOptionsByGroupId: PropTypes.func,
    resetGroupsList: PropTypes.func,
    ownLocation: PropTypes.object
};

PickList.defaultProps = {
    routeParams: {},
    requestPickList: noop,
    getOptionsByGroupId: noop,
    resetGroupsList: noop,
    ownLocation: {}
};
