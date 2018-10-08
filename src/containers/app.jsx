import React, {Component} from 'react';
import {Link} from 'react-router';
import {isEmpty, get} from 'lodash';
import customerData from 'modules/hocs/customer-data';
import FakeAuth from 'pages/profile/fake-auth';
import './app.scss';

const processCart = () => {
    const prodLength = localStorage.getItem('products');
    if (isEmpty(prodLength)) {
        localStorage.setItem('cart', JSON.stringify([]));
    } else {

    }
};

const autoLogin = () => {
    console.log('autologoin on cookie, stub');
};

class App extends Component {
    componentDidMount() {
        console.log('* APP CDM');
        processCart();
        autoLogin();
    }

    render() {
        return (
            <div className="container">
                <header>
                    <div>
                        <Link to="/">home</Link> |
                        <Link to="/fiche">elcat</Link> |
                        <Link to="/profile">Profile</Link> |
                        <Link to="/pick">Pick</Link>
                        <FakeAuth />
                        <div>{get(this.props.profile, 'customer.name', 'not logged in')}</div>
                    </div>
                </header>

                <section>
                    <div style={{float: 'left', width: '25%'}}>&nbsp;</div>
                    <div style={{float: 'left', width: '75%'}}>{this.props.children}</div>
                    <div style={{display: 'block', clear: 'both', content: ' '}} />
                </section>

                <footer>
                    Footer
                </footer>
            </div>
        );
    }
}

export default customerData(App);
