import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

class MakeYearTransport extends Component {

    render() {
        return (
            <div>
                <h4>make year transport</h4>

                <div> c :
                    <Link to='/model/465' modelId={500}>cr500</Link> 500 |
                    <Link to='/model/4657' modelId={700}>cb700</Link> 700
                </div>

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
