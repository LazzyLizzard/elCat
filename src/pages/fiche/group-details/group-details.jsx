import React from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import * as actions from './actions';
import {Loader} from '../../../components/Common/loader';
import {NAMESPACE} from './../model/reducer';

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
        let x = get(this.props, 'fiche.modelData.modelInfo.model_id', 'no');
        console.log(x);
    }

    componentWillReceiveProps() {
    }


    render() {
        const {[NAMESPACE]: {loader}} = this.props;
        return (
            <div>
                <div>details in group</div>
                {loader && <Loader />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
