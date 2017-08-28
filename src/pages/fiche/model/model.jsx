import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import noop from 'lodash/noop';
import ModelInfo from './ModelInfo';
import {getModelData} from './actions';

// import {Link} from 'react-router';
const modelId = 555;

const mapDispatchToProps = dispatch => ({
    loadModelData: () => dispatch(getModelData(modelId))
});

function mapStateToProps(state) {
    return state;
}

@connect(mapStateToProps, mapDispatchToProps)
export class Model extends Component {
    componentDidMount() {
        console.log('CDM');
        this.props.loadModelData();
    }

    render() {
        return (
            <div>
                <h4>model (detail groups)</h4>
                <ModelInfo modelId={modelId} load={this.props.loadModelData} />
            </div>
        );
    }
}


// Model.propTypes = {
//      : PropTypes.func
// };

// Model.defaultProps = {
//     loadModelData: noop
// };
