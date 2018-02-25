/**
 * Entry point for pick form
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, getFormInitialValues} from 'redux-form';
import {noop} from 'lodash';
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

// &page=1&filters=500:1,2,3;700:3,4,5;vendor:1,2,3
// const mockedForm = {
//     page: 1,
//     filters: []
// };

const prepareAtoFillData = (query) => {
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
            routeParams: {pickGroupName}
        } = this.props;

        // let pickGroupId;

        this.paginationBaseUrl = `${NAMESPACE}/${pickGroupName}`;

        if (!pickList) {
            this.props.requestPickList(pickGroupName);
        } else {
            this.pickGroupId = getGroupIdByName(pickGroupName, pickList);
            this.props.getOptionsByGroupId(this.pickGroupId);
        }

        // console.log(this.props);
    }

    componentWillUnmount() {
        this.props.resetGroupsList();
    }

    // pickGroupId = null;
    // paginationBaseUrl = '';

    render() {
        console.log('render');
        const {
            [NAMESPACE]: {pickListGroups, pickResult, pagination, error, pickGroupId},
            ownLocation: {pathname, query}
        } = this.props;

        const afd = prepareAtoFillData(query);
        // console.log('afd', afd);
        // console.log('query', query);

        if (pickListGroups) {
            // change(NAMESPACE, 'm', afd.m);
            // change(NAMESPACE, 'filters', afd.filters);
            // console.log(afd);

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
                        afd={afd}
                        onSubmit={this.props.getPickResults}
                    />
                    <PickResults
                        result={pickResult}
                        pagination={pagination}
                        pageClickHandler={this.props.pageNumberClick}
                        baseUrl={this.paginationBaseUrl}
                    />
                </div>
            );
        }
        return null;
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
