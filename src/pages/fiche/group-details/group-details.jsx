import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Loader} from '../../../components/Common/loader';
import {NAMESPACE} from '../reducer';

function mapDispatchToProps(dispatch) {
    return {
        getGroupData: groupId => dispatch(actions.requestGroupInfo(groupId))
    };
}

function mapStateToProps(state) {
    return state;
}

class GroupDetails extends React.Component {
    componentDidMount() {
        this.props.getGroupData(40741);
    }

    render() {
        const {loader} = this.props[NAMESPACE];
        return (
            <div>
                <div>details in group</div>
                {loader && <Loader />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
