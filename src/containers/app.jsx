import React, {Component} from 'react';
import {Link} from 'react-router';

export class App extends Component {
    render() {
        return (
            <div>
                <h3>Elcat app (<Link to="/">go</Link>)</h3>
                <div style={{width: '1400px', margin: '0 auto'}}>
                    <div style={{float: 'left', width: '25%'}}>
                        <div>
                            cats
                        </div>
                    </div>
                    <div style={{float: 'left', width: '75%'}}>{this.props.children}</div>
                    <div style={{display: 'block', clear: 'both', content: ' '}} />
                </div>
            </div>);
    }
}

