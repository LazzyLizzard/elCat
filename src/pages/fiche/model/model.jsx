import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get} from 'lodash';
import * as actions from './actions';
// import {Clicker} from './clicker';
import {ModelInfo} from './../model-info';
// import {getModelData} from './../../../utils/get-model-info';
import {NAMESPACE} from './reducer';

function mapDispatchToProps(dispatch) {
    return {
        modelDataFetcher: modelId => dispatch(actions.requestModelData(modelId)),
        modelDataReset: () => dispatch(actions.resetModelData())
        // ,
        // currentModelDataUpdate: currentModelData => dispatch(actions.updateCurrent(currentModelData))
    };
}

function mapStateToProps(state) {
    return state;
}

class Model extends Component {
    componentDidMount() {
        console.log('---- CDM');
        const {[NAMESPACE]: {modelData}, routeParams: {modelId}} = this.props;
        const existingModelId = get(modelData, 'modelInfo.model_id', null);
        if (!existingModelId || modelId !== modelData.modelInfo.model_id) {
            this.props.modelDataReset();
            this.props.modelDataFetcher(modelId);
            // this.props.currentModelDataUpdate(modelData);
        }
    }

    render() {
        const {[NAMESPACE]: {loader, error, modelData}} = this.props;
        return (
            <div>
                {error && <div>
                    error!
                    <div>{error.message}</div>
                </div>}
                {modelData && <ModelInfo modelData={modelData} loader={loader} />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)

(
    Model
)
;

ModelInfo
    .propTypes = {
    currentModelDataUpdate: PropTypes.func,
    modelDataFetcher: PropTypes.func,
    loader: PropTypes.bool,
    error: PropTypes.object,
    modelData: PropTypes.object,
    routeParams: PropTypes.object
};
