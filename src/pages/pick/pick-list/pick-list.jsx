/**
 * Entry point for pick form
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormValues, getFormInitialValues} from 'redux-form';
import {noop} from 'lodash';
import {a, formValuesStringify} from 'utils/pick-from-utils';
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

class PickList extends React.Component {
    componentDidMount() {
        // console.log(this.props.op);
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

        // formValuesParse('500:1,2,3;700:5,7,9');
        console.log(a('500:1,2,3;700:5,7,9'));
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        formValuesStringify(nextProps.pickFormValues);
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
                            pickGroupId={32} // TODO get from props
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
