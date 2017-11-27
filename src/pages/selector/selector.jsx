import React from 'react';
// import TestForm from './_form';
import {reduxForm, Field} from 'redux-form';
// import CheckboxGroup from './cba';
// import MultiCheckboxField from './cbc';
import {FORM_DATA} from './test-data';

// https://github.com/erikras/redux-form/issues/635

const CHECKBOX = props => (
    <input type="checkbox" {...props} />
)

class Selector extends React.Component {
    render() {
        return (
            <div>
                <h4>Selector</h4>
                {/*https://github.com/erikras/redux-form/issues/1037*/}
                {/*https://www.bountysource.com/issues/34544406-v6-how-to-create-a-checkbox-group*/}

                {
                    FORM_DATA.groups[0].list.map((boxItem, index) => (
                        <Field
                            key={index}
                            name={`a[${boxItem.value}]`}
                            label={boxItem.label}
                            checked={!!props.value[option.value]}
                            component={CHECKBOX}
                        />
                    ))
                }


                {/* <MultiCheckboxField label="box1" field="boxxxx" options={FORM_DATA.groups[0].list} /> */}
                {/* <CheckboxGroup options={FORM_DATA.groups[0].list} name="box" /> */}
            </div>
        );
    }
}

export default reduxForm({form: 'myForm'})(Selector);
