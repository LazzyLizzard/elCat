import React from 'react';
import {reduxForm} from 'redux-form';
import {ManufacturersList} from './manufacturers-list';
import {FormWithBoxes} from './form-with-boxes';
import {NAMESPACE} from './../reducer';
// TODO think where import below should be
import {toggleBoxesHandler} from '../actions';

const formInitialValues = {
    page: 1,
    pickGroupId: null
};

// const renderField = (field) => {
//     console.log(field);
//     return (
//         <div className="input-row">
//             <input {...field.input} type="text" />
//         </div>
//     );
// };

class PickForm extends React.Component {
    componentWillReceiveProps() {
        const {change, pickGroupId} = this.props;
        change('pickGroupId', pickGroupId);
    }

    render() {
        const {handleSubmit, pristine, reset, submitting, pickFormData, onSubmit} = this.props;
        // const x = {aaa: 'bbb'}
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <Field */}
                    {/* name="pickGoId" */}
                    {/* component={renderField} */}
                    {/* /> */}

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
    }
}

export default reduxForm({
    form: NAMESPACE,
    enableReinitialize: true,
    initialValues: formInitialValues
})(PickForm);
