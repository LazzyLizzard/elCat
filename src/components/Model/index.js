import React, {PropTypes, Component} from 'react';
import {ModelInfo} from './ModelInfo';
// import {Link} from 'react-router';

class Model extends Component {

	render() {
		return (
			<div>
				<h4>model (detail groups)</h4>
				<ModelInfo modelId={777}/>
			</div>
		)
	}
}

export default Model;

Model.PropTypes = {
	myProp: PropTypes.number
};