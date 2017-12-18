import React from 'react';
import {reduxForm} from 'redux-form';
import {FORM_DATA} from './test-data';
import {FormWithBoxes} from './form-with-boxes';

const SelectorForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Selector</h4>
                <FormWithBoxes boxesGroup={FORM_DATA.groups[0]} />

                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({form: 'myForm'})(SelectorForm);
