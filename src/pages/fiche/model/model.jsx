import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Clicker} from './clicker'

const modelId = 837;

function mapDispatchToProps(dispatch) {
    return {
        onClicker: id => dispatch(actions.reqModel(id))
    };
}

class Model extends Component {

    componentDidMount() {
        // this.props.onClick()
    }

    render() {
        return (
            <div>
                hallo
                {/* <ModelInfo modelId={modelId} actor={this.props.loadModelData} /> */}
                <Clicker onClick={() => this.props.onClicker} modelId={modelId} />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Model);
