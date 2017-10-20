import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {ModelInfo} from 'pages/fiche/model-info';
import * as actions from './actions';
import {NAMESPACE} from './reducer';

function mapDispatchToProps(dispatch) {
    return {
        modelDataFetcher: modelId => dispatch(actions.requestModelData(modelId)),
        modelDataReset: () => dispatch(actions.resetModelData())
    };
}

function mapStateToProps(state) {
    return state;
}

class Model extends Component {
    componentDidMount() {
        const {routeParams: {modelId}} = this.props;
        if (this.modelFetchRequired()) {
            this.props.modelDataReset();
            this.props.modelDataFetcher(modelId);
        }
    }

    modelFetchRequired() {
        const {[NAMESPACE]: {modelData}, routeParams: {modelId}} = this.props;
        return !(modelId === get(modelData, 'modelInfo.model_id', null));
    }

    render() {
        const {[NAMESPACE]: {loader, error, modelData}} = this.props;
        return (
            <div>
                {error
                    ? <div>{error.message}</div>
                    : <ModelInfo modelData={modelData} loader={loader} />
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Model);

ModelInfo.propTypes = {
    routeParams: PropTypes.object,
    currentModelDataUpdate: PropTypes.func,
    modelDataFetcher: PropTypes.func,
    loader: PropTypes.bool,
    error: PropTypes.object,
    modelData: PropTypes.object
};
