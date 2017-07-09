import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import get from 'lodash/get';
import ModelGroups from './ModelGroups';
import {Loader} from './../../components/Common/Loader'

// import styles from './styles.scss';

class ModelInfo extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {load, modelId} = this.props;
		load(modelId)
	}

	render() {
		console.log(this.props.modelData);
		const {modelData} = this.props;
		return (
			<div>
				<h3>model id {this.props.modelId}</h3>

				<Loader model={this.props.modelId} visible={modelData.loading}/>

				<ModelGroups modelGroups={get(modelData, 'modelData.modelGroupsList', false)}/>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(ModelInfo);

ModelInfo.propTypes = {
	modelId: PropTypes.number
};