import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
// import ModelInfo from './model-info';

// const modelId = 555;

function mapDispatchToProps(dispatch) {
    return {
        wtf: () => dispatch('REQ')
    };
}


class Model extends Component {
    componentDidMount() {
        this.sendAlert();
    }

    sendAlert = () => {
        this.props.wtf();
    };

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
