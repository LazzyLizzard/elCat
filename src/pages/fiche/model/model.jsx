import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import ModelInfo from './model-info';

const modelId = 555;

const mapDispatchToProps = dispatch => ({
    loadModelData: dispatch(
        {type: actions.MODEL_INFO_REQUEST}
    )
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
        console.log(this.props);
        return (
            <ModelInfo modelId={modelId} />
        );
    }
}


// Model.propTypes = {
//      : PropTypes.func
// };

// Model.defaultProps = {
//     loadModelData: noop
// };
