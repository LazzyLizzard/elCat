import React, {PropTypes, Component} from 'react';
// import styles from './styles.scss';

export class ModelInfo extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const modelId = this.props.modelId;
		console.log('model id %s', modelId);
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