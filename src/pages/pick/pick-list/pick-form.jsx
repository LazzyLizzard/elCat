import React from 'react';
import {reduxForm} from 'redux-form';
import {ManufacturersList} from './manufacturers-list';
import {FormWithBoxes} from './form-with-boxes';

const PickForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, pickFormData, onSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ManufacturersList formData={pickFormData} />
                <FormWithBoxes formData={pickFormData} />

                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({form: 'pickForm'})(PickForm);
