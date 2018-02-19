import React from 'react';
import {reduxForm} from 'redux-form';
import {ManufacturersList} from './manufacturers-list';
import {FormWithBoxes} from './form-with-boxes';
import {PICK_FORM_PAGE, PICK_FORM_GROUP_ID} from './../field-names';
import {NAMESPACE} from './../reducer';
// TODO think where import below should be
import {toggleBoxesHandler} from '../actions';

const formInitialValues = {
    [PICK_FORM_PAGE]: 1,
    [PICK_FORM_GROUP_ID]: null
};

class PickForm extends React.Component {
    componentWillReceiveProps() {
        const {change, pickGroupId} = this.props;
        change('pickGroupId', pickGroupId);
    }

    onSubmitWithArgument = additionalArgument => values => this.props.onSubmit(values, additionalArgument);

    render() {
        const {handleSubmit, pristine, reset, submitting, pickFormData, pathName = null} = this.props;
        return (
            <div>
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                {/* <form onSubmit={(values, otherProps) => handleSubmit(onSubmit(values, otherProps))}> */}
                <form onSubmit={handleSubmit(this.onSubmitWithArgument(pathName))}>
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
