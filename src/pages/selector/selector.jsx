import React from 'react';
// import TestForm from './_form';
import {reduxForm, Field} from 'redux-form';
// import CheckboxGroup from './cba';
import MultiCheckboxField from './cbc';
import {FORM_DATA} from './test-data';

// https://github.com/erikras/redux-form/issues/635
class Selector extends React.Component {
    render() {
        return (
            <div>
                <h4>Selector</h4>
                <Field
                    name="fruits"
                    component={props => (<MultiCheckboxField
                        options={FORM_DATA.groups[0].list}
                        field={props.input}
                        label="ZZZZZZZZZ"
                    />)
                    }
                />
                {/* <MultiCheckboxField label="box1" field="boxxxx" options={FORM_DATA.groups[0].list} /> */}
                {/* <CheckboxGroup options={FORM_DATA.groups[0].list} name="box" /> */}
            </div>
        );
    }
}

export default reduxForm({form: 'myForm'})(Selector);
