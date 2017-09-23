import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Clicker} from './clicker'

const modelId = 555;

function mapDispatchToProps(dispatch) {
    return {
        onClick: () => dispatch(actions.reqModel())
    };
}

class Model extends Component {
    render() {
        return (
            <div>
                hallo
                {/* <ModelInfo modelId={modelId} actor={this.props.loadModelData} /> */}
                <Clicker onClick={() => this.props.onClick} />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Model);
