import React from 'react';
// import TestForm from './_form';
import {reduxForm} from 'redux-form';
import CheckboxGroup from './cba';
import {FORM_DATA} from './test-data';

class Selector extends React.Component {
    render() {
        return (
            <div>
                <h4>Selector</h4>
                <CheckboxGroup options={FORM_DATA.groups[0].list} name="box" />
            </div>
        );
    }
}

export default reduxForm({form: 'myForm'})(Selector);
