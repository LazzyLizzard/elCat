import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get} from 'lodash';
import * as actions from './actions';
// import {Clicker} from './clicker';
import {ModelInfo} from '../model-info';
// import {getModelData} from './../../../utils/get-model-info';
import {NAMESPACE} from './reducer';

function mapDispatchToProps(dispatch) {
    return {
        modelDataFetcher: modelId => dispatch(actions.requestModelData(modelId))
        // modelDataFetcher: dispatch => modelId => getModelData(modelId)
    };
}

function mapStateToProps(state) {
    return state;
}

class Model extends Component {
    componentDidMount() {
        const {[NAMESPACE]: {modelData}, routeParams: {modelId}} = this.props;
        // if (!get(modelData, 'modelInfo.model_id', null)) {
        this.props.modelDataFetcher(modelId);
        // }
    }


    componentWillReceiveProps(nextProps) {
        console.log('---- CWRP');
        console.log(nextProps);
    }

    componentWillUnmount() {
        console.log('---- CWU');
    }

    render() {
        const {[NAMESPACE]: {loader, error, modelData}} = this.props;
        console.log('render');
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

export default connect(mapStateToProps, mapDispatchToProps)(Model);

ModelInfo.propTypes = {
    loader: PropTypes.bool,
    error: PropTypes.object,
    modelData: PropTypes.object,
    routeParams: PropTypes.object
};
