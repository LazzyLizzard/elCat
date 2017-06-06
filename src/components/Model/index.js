import React, {PropTypes, Component} from 'react';
// import {Link} from 'react-router';

class Model extends Component {

	render() {
		return (
			<div>
				<h4>model (detail groups)</h4>

				<div>
					details list
				</div>
			</div>
		)
	}
}

export default Model;

Model.PropTypes = {
	myProp: PropTypes.number
};