import React, {PropTypes, Component} from 'react';

class MakeYearTransport extends Component {

    render() {
        return (
            <div>
                <h4>make year transport</h4>
            </div>
        )
    }
}

export default MakeYearTransport;

MakeYearTransport.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number,
    transportId: PropTypes.number
};