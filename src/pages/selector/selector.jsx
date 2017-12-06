import React from 'react';
import {reduxForm} from 'redux-form';
import {FORM_DATA} from './test-data';
import {showResults} from './show-results';
import {FormWithBoxes} from './form-with-boxes';

const SelectorForm = (props) => {
    const {pristine, reset, submitting} = props;
    return (
        <form onSubmit={showResults}>
            <h4>Selector</h4>
            <FormWithBoxes boxesGroup={FORM_DATA.groups[0]} />

            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
            </div>
        </form>
    );
};

export default reduxForm({form: 'myForm'})(SelectorForm);
