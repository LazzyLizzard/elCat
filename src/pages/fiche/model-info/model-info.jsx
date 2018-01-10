import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import get from 'lodash/get';
import {ModelGroups} from 'pages/fiche/model-groups';
import {Loader} from 'components/Common/loader';

// import styles from './styles.scss';

export class ModelInfo extends Component {
    render() {
        const {modelData: {modelInfo, modelGroupsList}, loader} = this.props;
        return (
            <div style={{position: 'relative'}}>
                <h4>model {modelInfo.manuf_name} {modelInfo.model_name} {modelInfo.year} (groups in model)</h4>
                {loader && <Loader />}
                {modelGroupsList && <ModelGroups modelGroups={modelGroupsList} modelId={modelInfo.model_id} />}
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
