import React, {PropTypes, Component} from 'react';

class MakeYear extends Component {

    render() {
        return (
            <div>
                <h4>make year</h4>
            </div>
        )
    }
}

export default MakeYear;

MakeYear.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number
};