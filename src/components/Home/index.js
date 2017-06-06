import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
// import style from './home.scss';



class Home extends Component {

    render() {
        return (
            <div>
                <h4>home</h4>

                <div>
                    <div>
                        <h5>hon</h5>
                        <div><Link to='/my/1/2'>moto</Link></div>
                        <div><Link to='/my/1/2'>ATV</Link></div>
                    </div>
                    <hr/>
                    <div>kaw</div>
                    <div>suz</div>
                    <div>yam</div>
                </div>
            </div>
        )
    }
}

export default Home;

Home.PropTypes = {
    myProp: PropTypes.number
};