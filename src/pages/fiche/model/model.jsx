import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import ModelInfo from './model-info';

const modelId = 555;

const mapDispatchToProps = dispatch => ({
    loadModelData: () => dispatch(
        actions.getModelData(modelId)
    )
});

const mapStateToProps = state => (state);

@connect(mapStateToProps, mapDispatchToProps)
export default class Model extends Component {
    // componentDidMount() {
    //     this.props.loadModelData();
    // }
    render() {
        console.log(this.props);
        return (
            <ModelInfo modelId={modelId} actor={this.props.loadModelData} />
        );
    }
}

// function mapStateToProps(state) {
//     return state;
// }

// export default connect(mapStateToProps)(ModelInfo);

// ModelInfo.propTypes = {
//     modelId: PropTypes.number
// };
