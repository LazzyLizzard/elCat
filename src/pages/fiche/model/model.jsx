import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Clicker} from './clicker';
import {ModelInfo} from '../model-info';

// const modelId = 837;

function mapDispatchToProps(dispatch) {
    return {
        onClicker: modelId => dispatch(actions.reqModel(modelId))
    };
}
function mapStateToProps(state) {
    return state;
}


class Model extends Component {
    // componentDidMount() {
    //     // this.props.onClick()
    // }

    render() {
        const modelId = 777;
        console.log(this.props, 'props model');
        return (
            <div>
                hallo
                {/* <ModelInfo modelId={modelId} actor={this.props.loadModelData} /> */}
                <Clicker modelLoader={this.props.onClicker} modelId={modelId} />

                <ModelInfo modelInfo={this.props} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Model);
