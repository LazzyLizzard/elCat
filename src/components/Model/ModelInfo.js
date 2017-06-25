import React, {PropTypes, Component} from 'react';

// import styles from './styles.scss';

export class ModelInfo extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
        const {load, modelId} = this.props;
		console.log('model id %s', modelId);
		console.log('mount');
		console.log(typeof load)
		load(modelId)
	}

	render() {
		return (
			<div>
				model id {this.props.modelId}
			</div>
		)
	}
}

ModelInfo.propTypes = {
	modelId: PropTypes.number
};