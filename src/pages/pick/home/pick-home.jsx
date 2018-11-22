/**
 * List of pick (selectors) groups, home page
 */
import React from 'react';
import {connect} from 'react-redux';
import {requestPickList} from './../actions';
import {NAMESPACE} from './../reducer';
import {PickGroups} from './pick-groups';

class PickHome extends React.Component {
    componentDidMount() {
        // TODO [sf] 22.12.2017 add check if data already in store
        this.props.requestPickList();
    }

    render() {
        const {[NAMESPACE]: {pickList}} = this.props;
        return (
            <div>
                <h3>Pick</h3>
                pick groups {pickList ? 'yes' : 'no'}
                {pickList && <PickGroups pickGroupsList={pickList} />}

            </div>
        );
    }
}

export default connect(
    state => state,
    {
        requestPickList
    }
)(PickHome);

