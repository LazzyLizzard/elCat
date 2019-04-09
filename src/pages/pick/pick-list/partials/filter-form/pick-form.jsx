import React from 'react';
import {reduxForm, getFormValues} from 'redux-form';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {Filter} from 'modules/filter';
import {ManufacturersList} from '../filter-manufacturers/manufacturers-list';
import {FilterTags} from './../../partials/filter-tags';
import {FilterRows} from '../filter-rows/filter-rows';
import {
    PICK_FORM_PAGE,
    PICK_FORM_GROUP_ID,
    PICK_FORM_FILTERS,
    PICK_FORM_MANUFACTURERS
} from '../../../field-names';
import {NAMESPACE} from '../../../reducer';
// TODO think where import below should be
import {toggleBoxesHandler, resetFilterField} from '../../../actions';
import {valueSelector} from '../../selectors';

class PickFormClass extends React.Component {
    // TODO [sf] 11.11.2018 NEEDS REFACTOR!
    componentDidMount() {
        const {autoFillData, pickGroupId, autofill, pathName, onSubmit} = this.props;

        const fData = {};
        fData[PICK_FORM_GROUP_ID] = pickGroupId;
        fData[PICK_FORM_PAGE] = 1;

        let doSubmit = false;

        if (get(autoFillData, PICK_FORM_FILTERS)) {
            doSubmit = true;
            fData[PICK_FORM_FILTERS] = autoFillData[PICK_FORM_FILTERS];
            autofill(PICK_FORM_FILTERS, autoFillData[PICK_FORM_FILTERS]);
        }
        if (get(autoFillData, PICK_FORM_MANUFACTURERS)) {
            doSubmit = true;
            fData[PICK_FORM_MANUFACTURERS] = autoFillData[PICK_FORM_MANUFACTURERS];
            autofill(PICK_FORM_MANUFACTURERS, autoFillData[PICK_FORM_MANUFACTURERS]);
        }
        console.log('DS', doSubmit);
        console.log('fData', fData);

        if (doSubmit === true) {
            onSubmit(fData, pathName);
        }
    }

    componentWillUnmount() {
        // TODO [sf] 11.11.2018 add clear store fields
    }


    onSubmitWithArgument = additionalArgument => values => this.props.onSubmit(values, additionalArgument);

    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            pickFormData,
            pathName = null,
            filterValues,
            manufacturersValues,
            formValues
        } = this.props;
        // console.log('pickFormData', pickFormData);

        return (
            <div>

                <FilterTags
                    fields={formValues}
                    // filterValues={filterValues}
                />
                <form
                    onSubmit={handleSubmit(this.onSubmitWithArgument(pathName))}
                >
                    <Filter
                        contentOpen
                        displayData={pickFormData}
                        filters={formValues}
                    />

                    <hr />
                    <hr />

                    {/*<ManufacturersList*/}
                        {/*formData={pickFormData}*/}
                        {/*fieldValues={manufacturersValues}*/}
                    {/*/>*/}
                    {/*<FilterRows*/}
                        {/*formData={pickFormData} // store values*/}
                        {/*boxToggleHandler={toggleBoxesHandler}*/}
                        {/*filterFieldValues={filterValues}*/}
                        {/*resetFiltersGroup={this.props.resetFilterField}*/}
                    {/*/>*/}

                    <div>
                        <button type="submit" disabled={submitting}>Submit</button>
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export const PickForm = connect(state => ({
    filterValues: valueSelector(state, PICK_FORM_FILTERS),
    manufacturersValues: valueSelector(state, PICK_FORM_MANUFACTURERS),
    formValues: getFormValues(NAMESPACE)(state)
}), {
    resetFilterField
})(
    reduxForm({
        form: NAMESPACE
    })(PickFormClass)
);
