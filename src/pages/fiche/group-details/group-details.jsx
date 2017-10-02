import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Loader} from '../../../components/Common/loader';


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
        // TODO [sf] 02.10.2017 use NAMESPACE
        const {loader} = this.props.fiche;
        return (
            <div>
                <div>details in group</div>
                {loader && <Loader />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
