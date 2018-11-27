/**
 * Entry point for pick form
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {noop, isNil, pick} from 'lodash';
import {prepareAutoFillData} from 'utils/pick-from-utils';
import {
    getGroupIdByName,
    requestPickList,
    getOptionsByGroupId,
    resetGroupsList,
    getPickResults
} from '../actions';
import {getNameSpace, getSelectedPickResults} from './selectors';
import PickForm from './pick-form';
import {PickResults} from './pick-results';
import {NAMESPACE} from '../reducer';

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
        const {
            [NAMESPACE]: {pickListGroups, pickResult, pagination, error, pickGroupId, loader},
            ownLocation: {pathname, query}
        } = this.props;

        console.warn(this.props.selectedPickResults);

        if (pickListGroups) {
            return (
                <div>
                    <h4>Picker</h4>
                    {error && (
                        <div style={{color: '#c70000'}}>{error.message}</div>
                    )}
                    {loader &&
                    <div style={{color: '#009900'}}>LOADING</div>
                    }
                    <PickForm
                        pickGroupId={pickGroupId}
                        pickFormData={pickListGroups}
                        pathName={pathname}
                        autoFillData={this.autoFillData}
                        onSubmit={this.props.getPickResults}
                        loader={loader}
                        initialValues={{
                            pickGroupId,
                            page: 1
                        }}
                    />
                    <PickResults
                        result={pickResult}
                        pagination={pagination}
                        baseUrl={this.paginationBaseUrl}
                        pageClickHandler={this.props.getPickResults}
                        pathName={pathname}
                        pickGroupId={pickGroupId}
                        queryParams={pick(query, ['filters', 'm'])}
                    />
                </div>
            );
        }
        return null;
    }
}

export default connect(
    (state, ownProps) => ({
        [NAMESPACE]: getNameSpace(NAMESPACE)(state),
        selectedPickResults: getSelectedPickResults(NAMESPACE)(state),
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
