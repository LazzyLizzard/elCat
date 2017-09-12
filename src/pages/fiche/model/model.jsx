import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
// import ModelInfo from './model-info';

const modelId = 555;

function mapDispatchToProps(dispatch) {
    return {dispatch};
}


class Model extends Component {

    componentDidMount() {
        this.prop.dispatch(actions.reqModel());
    }

    render() {
        console.log(this.props);
        return (
            <div>
                hallo
                {/* <ModelInfo modelId={modelId} actor={this.props.loadModelData} /> */}
            </div>
        );
    }
}

connect(mapDispatchToProps)(Model);
