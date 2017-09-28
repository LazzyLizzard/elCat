import React, {Component} from 'react';
// import {connect} from 'react-redux';
import get from 'lodash/get';
import ModelGroups from '../model-groups/ModelGroups';

// import styles from './styles.scss';

export class ModelInfo extends Component {
    componentDidMount() {
        console.warn('CDM');
        console.warn(this.props);
    }

    componentWillReceiveProps() {
        console.warn('CWRP');
        // const {load, modelId} = this.props;
        // load(modelId);
    }

    render() {
        console.warn(this.props);
        const {modelData} = this.props;
        return (
            <div>
                <h4>model (detail groups)</h4>
                <h3>model id {this.props.modelId}</h3>
                {/* {modelData.loading && <Loader model={this.props.modelId} />} */}
                <ModelGroups modelGroups={get(modelData, 'modelData.modelGroupsList', false)} />
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
