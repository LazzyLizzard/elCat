import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import ModelInfo from './ModelInfo';
import * as modelAction from './actions';

// import {Link} from 'react-router';
const modelId = 555;

class Model extends Component {

    render() {
        return (
            <div>
                <h4>model (detail groups)</h4>
                <ModelInfo modelId={modelId} load={this.props.loadModelData} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadModelData: () => dispatch(modelAction.getModelData(modelId))
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Model);

Model.PropTypes = {
    myProp: PropTypes.number
};