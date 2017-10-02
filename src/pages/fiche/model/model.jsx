import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from './actions';
// import {Clicker} from './clicker';
import {ModelInfo} from '../model-info';
import {Loader} from '../../../components/Common/loader';
import {NAMESPACE} from './reducer';

function mapDispatchToProps(dispatch) {
    return {
        onClicker: modelId => dispatch(actions.reqModel(modelId))
    };
}

function mapStateToProps(state) {
    return state;
}

class Model extends Component {

    componentDidMount() {
        // TODO [sf] 29.09.2017 get from props
        const modelId = 839;
        this.props.onClicker(modelId);
    }

    render() {
        const modelId = 837;
        console.log(this.props[NAMESPACE], 'props model');
        const {loader, error, modelData} = this.props[NAMESPACE];
        return (
            <div>
                hallo
                {/* <ModelInfo modelId={modelId} actor={this.props.loadModelData} /> */}
                {/* <Clicker modelLoader={this.props.onClicker} modelId={modelId} /> */}
                {loader && <Loader />}
                {error && <div>error!</div>}
                {modelData && <ModelInfo modelData={modelData} />}

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Model);

// ModelInfo.propTypes = {
//     loader: PropTypes.bool,
//     error: PropTypes.object,
//     modelData: PropTypes.object
// };
