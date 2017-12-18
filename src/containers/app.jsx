import React, {Component} from 'react';
import {Link} from 'react-router';
import './app.scss';

export class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h3>App:</h3>
                    <div>
                        <Link to="/">home</Link> |
                        <Link to="/fiche">elcat</Link> |
                        <Link to="/profile">Profile</Link> |
                        <Link to="/pick">Pick</Link>
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

