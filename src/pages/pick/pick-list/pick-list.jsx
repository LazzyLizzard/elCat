/**
 * Entry point for pick form
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, getFormInitialValues} from 'redux-form';
import {noop, get} from 'lodash';
import {filterValuesParse, filterValuesStringify} from 'utils/pick-from-utils';
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

// &page=1&filters=500:1,2,3;700:3,4,5;vendor:1,2,3
// const mockedForm = {
//     page: 1,
//     filters: []
// };

class PickList extends React.Component {
    constructor(props) {
        super(props);
        this.pickGroupId = 32;
    }

    componentDidMount() {
        // console.log(this.props.op);
        const {
            [NAMESPACE]: {pickList},
            routeParams: {pickGroupName}
        } = this.props;

        this.paginationBaseUrl = `${NAMESPACE}/${pickGroupName}`;

        if (!pickList) {
            this.props.requestPickList(pickGroupName);
        } else {
            this.pickGroupId = getGroupIdByName(pickGroupName, pickList);
            this.props.getOptionsByGroupId(this.pickGroupId);
        }

        // filterValuesParse('500:1,2,3;700:5,7,9');
        console.log(filterValuesParse('500:1,2,3;700:5,7,9'));
    }

    componentWillReceiveProps(nextProps) {
        const filterValues = get(nextProps, 'pickFormValues.filters', null);
        filterValuesStringify(filterValues);
    }

    componentWillUnmount() {
        this.props.resetGroupsList();
    }

    pickGroupId = null;
    paginationBaseUrl = '';

    render() {
        console.log('render');
        const {
            [NAMESPACE]: {pickListGroups, pickResult, pagination, error},
            ownLocation: {pathname}
        } = this.props;
        // console.log(ownLocation);
        return (
            <div>
                {pickListGroups && (
                    <div>
                        <h4>Picker</h4>
                        {error && (
                            <div style={{color: '#c70000'}}>{error.message}</div>
                        )}
                        <PickForm
                            pickGroupId={this.pickGroupId}
                            pickFormData={pickListGroups}
                            pathName={pathname}
                            onSubmit={this.props.getPickResults}
                        />
                        <PickResults
                            result={pickResult}
                            pagination={pagination}
                            pageClickHandler={this.props.pageNumberClick}
                            baseUrl={this.paginationBaseUrl}
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
        requestPickList: pickGroupName => dispatch(requestPickList(pickGroupName)),
        getOptionsByGroupId: id => dispatch(getOptionsByGroupId(id)),
        resetGroupsList: () => dispatch(resetGroupsList()),
        getPickResults: (requestBody, path) => dispatch(getPickResults(requestBody, path)),
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
