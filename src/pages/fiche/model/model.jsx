import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import noop from 'lodash/noop';
import ModelInfo from './model-info';
import {getModelData} from './actions';

// import {Link} from 'react-router';
const modelId = 555;

const mapDispatchToProps = dispatch => ({
    loadModelData: () => dispatch({type: 'MODEL_INFO_REQUEST'})
});

// const mapDispatchToProps = dispatch => ({
//     onTodoClick: (id) => {
//         dispatch(toggleTodo(id));
//     }
// });

function mapStateToProps(state) {
    return state;
}

@connect(mapStateToProps, mapDispatchToProps)
export class Model extends Component {

    render() {
        return (
            <ModelInfo modelId={modelId} load={this.loadModelData} />
        );
    }
}


// Model.propTypes = {
//      : PropTypes.func
// };

// Model.defaultProps = {
//     loadModelData: noop
// };
