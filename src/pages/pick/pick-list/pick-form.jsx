import React from 'react';
import {reduxForm} from 'redux-form';
// import {FORM_DATA} from './../test-data';
import {FormWithBoxes} from './form-with-boxes';

const PickForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, pickFormData} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormWithBoxes formData={pickFormData} />

                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({form: 'myForm'})(PickForm);
