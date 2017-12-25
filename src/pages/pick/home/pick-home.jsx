/**
 * List of pick (selectors) groups, home page
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions';
import {NAMESPACE} from './../reducer';
import {PickGroups} from './pick-groups';

const mapDispatchToProps = dispatch => ({
    requestPickList: () => dispatch(actions.requestPickList())
});

const mapStateToProps = state => state;

class PickHome extends React.Component {
    componentDidMount() {
        // TODO [sf] 22.12.2017 add check if data already in store
        this.props.requestPickList();
    }

    render() {
        const {[NAMESPACE]: {pickList}} = this.props;
        return (
            <div>
                <h3>pick</h3>
                pick groups {pickList ? 'yes' : 'no'}
                {pickList && <PickGroups pickGroupsList={pickList} />}

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickHome);

