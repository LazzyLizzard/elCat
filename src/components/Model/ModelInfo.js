import React, {PropTypes, Component} from 'react';
import {Loader} from './../../components/Common/Loader'

// import styles from './styles.scss';

export class ModelInfo extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {load, modelId} = this.props;
        console.log('model id %s', modelId);
        console.log('mount');
        console.log(typeof load);
        load(modelId)
    }

    render() {
        return (
            <div>
                <h3>model id {this.props.modelId}</h3>
                <div>
                    <Loader model={this.props.modelId} visible={false} />
                </div>
            </div>
        )
    }
}

ModelInfo.propTypes = {
    modelId: PropTypes.number
};