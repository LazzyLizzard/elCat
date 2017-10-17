import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import get from 'lodash/get';
import ModelGroups from '../model-groups/model-groups';
import {Loader} from './../../../components/Common/loader';

// import styles from './styles.scss';

export class ModelInfo extends Component {
    render() {
        const {modelData} = this.props;
        const {modelInfo, modelGroupsList} = modelData;
        return (
            <div>
                <h4>model {modelInfo.manuf_name} {modelInfo.model_name} (groups in model)</h4>
                {this.props.loader && <Loader />}
                {/*<h3>model id {modelInfo.model_id}</h3>*/}
                {/* {modelData.loading && <Loader model={this.props.modelId} />} */}
                <ModelGroups modelGroups={modelGroupsList} modelId={modelInfo.model_id} />
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return state;
// }

// export default connect(mapStateToProps)(ModelInfo);

// ModelInfo.propTypes = {
//     modelId: PropTypes.number
// };
