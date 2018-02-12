import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {ManufacturersList} from './manufacturers-list';
import {FormWithBoxes} from './form-with-boxes';
import {NAMESPACE} from './../reducer';
// TODO think where import below should be
import {toggleBoxesHandler} from '../actions';

const formInitialValues = {
    page: 1
};

const PickForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, pickFormData, onSubmit, pickGroupId} = props;
    // autofill(NAMESPACE, 'pickId', 'dfsdfs');
    console.log('af');

    const renderField = (field) => {
        console.log(field);
        return (
            <div className="input-row">
                <input {...field.input} type="text" />
            </div>
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                * {pickGroupId}
                <Field
                    name="pickId"
                    value="5345345"
                    component={renderField}
                />

                <ManufacturersList formData={pickFormData} />
                <FormWithBoxes
                    formData={pickFormData}
                    boxToggleHandler={toggleBoxesHandler}
                />

                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: NAMESPACE,
    enableReinitialize: true,
    initialValues: formInitialValues
})(PickForm);
