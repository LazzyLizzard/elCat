import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get} from 'lodash';
import * as actions from './actions';
// import {Clicker} from './clicker';
import {ModelInfo} from '../model-info';
import {Loader} from '../../../components/Common/loader';
// import {getModelData} from './../../../utils/get-model-info';
import {NAMESPACE} from './reducer';

function mapDispatchToProps(dispatch) {
    return {
        onClicker: modelId => dispatch(actions.requestModelData(modelId))
        // onClicker: dispatch => modelId => getModelData(modelId)
    };
}

function mapStateToProps(state) {
    return state;
}

class Model extends Component {
    componentDidMount() {
        const {[NAMESPACE]: {modelData}, routeParams: {modelId}} = this.props;
        if (!get(modelData, 'modelInfo.model_id', null)) {
            this.props.onClicker(modelId);
        }
    }

    render() {
        console.log(this.props[NAMESPACE], 'props model');
        const {[NAMESPACE]: {loader, error, modelData}} = this.props;
        return (
            <div>
                hallo
                {/* <ModelInfo modelId={modelId} actor={this.props.loadModelData} /> */}
                {/* <Clicker modelLoader={this.props.onClicker} modelId={modelId} /> */}
                {loader && <Loader />}
                {error && <div>
                    error!
                    <div>{error.message}</div>
                </div>}
                {modelData && <ModelInfo modelData={modelData} />}

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
