import React from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {Loader} from 'components/Common/loader';
import * as actions from './actions';
import {NAMESPACE} from './../model/reducer';
import {DetailsList} from './details-list';

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
        const {routeParams: {groupId}} = this.props;
        this.props.getGroupData(groupId);
        let x = get(this.props, 'fiche.modelData.modelInfo.model_id', 'no');
        console.log(x);
    }


    render() {
        const {[NAMESPACE]: {loader, groupData}} = this.props;
        return (
            <div style={{position: 'relative'}}>
                <div>details in group</div>
                {loader && <Loader />}
                {groupData && <DetailsList list={groupData} />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
